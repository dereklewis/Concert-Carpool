const db = require("../config/connection");
const { Profile, Event } = require("../models");
const profileSeeds = require("./profileSeeds.json");
const eventSeeds = require("./eventSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

db.once("open", async () => {
  try {
    await Event.deleteMany({});
    await Event.create(eventSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
