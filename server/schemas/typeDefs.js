const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    city: String
    neighborhood: String
    aboutme: String
  }

  type Event {
    _id: ID
    eventName: String
    eventLocation: String
    eventDate: String
    driver: String
    passenger: String
    notes: String
    profile: Profile
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile

    events: [Event]!
    event(eventId: ID!): Event
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, city: String!, neighborhood: String!, aboutme: String!): Auth
    
    login(email: String!, password: String!): Auth
    removeProfile: Profile

    addEvent(_id: ID, eventName: String, eventLocation: String, eventDate: String, driver: String, passenger: String, notes: String, profile: ID): Auth
    removeEvent: Event
  }

`;

module.exports = typeDefs;
