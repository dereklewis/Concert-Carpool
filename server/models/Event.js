const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  eventName: {
    type: String,
    trim: true,
    required: true,
  },
  eventLocation: {
    type: String,
    trim: true,
    required: true,
  },
  eventDate: {
    type: Date,
    trim: true,
    required: true,
  },
  driver: {
    type: Boolean,
  },
  passenger: {
    type: Boolean,
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 75,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const Event = model("Event", eventSchema);

module.exports = Event;
