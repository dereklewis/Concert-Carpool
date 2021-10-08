const db = require("../config/connection");
const { Profile, Event } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const eventSeeds = require("./eventSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    const profileData = await Profile.find({});

    await Event.deleteMany({});
    console.log(profileData);
    for (let i = 0; i < eventSeeds.length; i++) {
      const eventProfile = await Event.create({
        ...eventSeeds[i],
        profile: profileData[i]._id,
      });
      console.log(`${eventProfile}`);
    }

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
