import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { ADD_EVENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const EventForm = () => {
  const profile = Auth.getProfile();
  const profileId = profile.data._id;

  const [eventForm, setEventForm] = useState({
    eventName: "",
    eventLocation: "",
    eventDate: "",
    driver: "",
    passenger: "",
    notes: "",
    profile: profileId,
  });

  const [addEvent, { error, data }] = useMutation(ADD_EVENT);

  // console.log(profile);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("this is the name", name);
    console.log("this is the value", value);

    setEventForm({
      ...eventForm,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(profileId);
    try {
      // const obj = {
      //   eventName: "Tame Impala",
      //   eventLocation: "Red Rocks",
      //   eventDate: "2021-10-07",
      //   driver: "true",
      //   passenger: "false",
      //   notes: "yay",
      //   profile: "6162068e82ea7fe7a5d35ce2",
      // };
      const { data } = await addEvent({
        variables: {
          ...eventForm,
        },
      });
      //need to redirect react-router here -> whatever we are showing in our cards
      console.log("this is the data", JSON.stringify(data));
    } catch (error) {
      console.log("this is an event error", error);
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
              name="eventName"
              value={eventForm.eventName}
              onChange={(event) => handleInputChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event location"
              name="eventLocation"
              value={eventForm.eventLocation}
              onChange={(event) => handleInputChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the event date"
              name="eventDate"
              value={eventForm.eventDate}
              onChange={(event) => handleInputChange(event)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Driver</Form.Label>
            <Form.Control
              type="text"
              placeholder="Would you like to be a driver"
              name="driver"
              value={eventForm.driver}
              onChange={(event) => handleInputChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Passenger</Form.Label>
            <Form.Control
              type="text"
              placeholder="Would you like to be a passenger"
              name="passenger"
              value={eventForm.passenger}
              onChange={(event) => handleInputChange(event)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Notes - add carpool notes here! Ex: Time of arrival to the venue
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="notes"
              value={eventForm.notes}
              onChange={(event) => handleInputChange(event)}
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
