import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ADD_EVENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const EventForm = ({ profileId }) => {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDriver, setEventDriver] = useState("");
  const [eventPassenger, setEventPassenger] = useState("");
  const [eventNotes, setEventNotes] = useState("");

  const [addEvent, { error }] = useMutation(ADD_EVENT);
  const profile = Auth.getProfile();
  const profileData = profile.data._id;
  console.log(profile);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addEvent({
        variables: {
          eventName,
          eventLocation,
          eventDate,
          eventDriver,
          eventPassenger,
          eventNotes,
          profileData,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event name"
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event location"
              value={eventLocation}
              onChange={(event) => setEventLocation(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the event date"
              value={eventDate}
              onChange={(event) => setEventDate(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Driver</Form.Label>
            <Form.Control
              type="text"
              placeholder="Would you like to be a driver"
              value={eventDriver}
              onChange={(event) => setEventDriver(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Passenger</Form.Label>
            <Form.Control
              type="text"
              placeholder="Would you like to be a passenger"
              value={eventPassenger}
              onChange={(event) => setEventPassenger(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Notes - add carpool notes here! Ex: Time of arrival to the venue
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={eventNotes}
              onChange={(event) => setEventNotes(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <p>
          You need to be logged in to fill out an event form. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default EventForm;
