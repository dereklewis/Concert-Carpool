const { AuthenticationError } = require("apollo-server-express");
const { Profile, Event } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    events: async () => {
      return Event.find();
    },

    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addProfile: async (
      parent,
      { name, email, password, city, neighborhood, aboutme }
    ) => {
      const profile = await Profile.create({
        name,
        email,
        password,
        city,
        neighborhood,
        aboutme,
      });
      const token = signToken(profile);

      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      console.log("we are inside the function");
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      console.log({ token, profile });
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addEvent: async (
      parent,
      { eventName, eventLocation, eventDate, driver, passenger, notes, profile }
    ) => {
      console.log(
        eventName,
        eventLocation,
        eventDate,
        driver,
        passenger,
        notes,
        profile
      );
      const event = await Event.create({
        eventName,
        eventLocation,
        eventDate,
        driver,
        passenger,
        notes,
        profile,
      });

      return event;
      // const token = signToken(profile);

      // return { token, profile };
    },
    // Make it so a logged in user can only remove a skill from their own profile
    // removeSkill: async (parent, { skill }, context) => {
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { skills: skill } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
  },

  // Query: {
  //   events: async () => {
  //     return Event.find();
  //   },

  //   event: async (parent, { eventId }) => {
  //     return Event.findOne({ _id: eventId });
  //   },
  //   // By adding context to our query, we can retrieve the logged in user without specifically searching for them
  //   // me: async (parent, args, context) => {
  //   //   if (context.user) {
  //   //     return Event.findOne({ _id: context.user._id });
  //   //   }
  //   //   throw new AuthenticationError("You need to be logged in!");
  //   // },
  // },

  // Mutation: {
  //   addEvent: async (
  //     parent,
  //     { eventName, eventLocation, eventDate, driver, passenger, notes, profile }
  //   ) => {
  //     const event = await Event.create({
  //       eventName,
  //       eventLocation,
  //       eventDate,
  //       driver,
  //       passenger,
  //       notes,
  //       profile,
  //     });
  //     // const token = signToken(profile);

  //     // return { token, profile };
  //   },
  // login: async (parent, { email, password }) => {
  //   const profile = await Profile.findOne({ email });

  //   if (!profile) {
  //     throw new AuthenticationError("No profile with this email found!");
  //   }

  //   const correctPw = await profile.isCorrectPassword(password);

  //   if (!correctPw) {
  //     throw new AuthenticationError("Incorrect password!");
  //   }

  //   const token = signToken(profile);
  //   return { token, profile };
  // },
};

module.exports = resolvers;
