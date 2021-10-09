import React from "react";

import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import EventForm from "../components/AddNewForm/AddNewForm";

import { QUERY_SINGLE_EVENT, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Event = () => {
  const { eventId } = useParams();

  const { loading, data } = useQuery(eventId ? QUERY_SINGLE_EVENT : QUERY_ME, {
    variables: { eventId: eventId },
  });

  const event = data?.me || data?.event || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === eventId) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Event?.name) {
    return (
      <h4>
        You need to be logged in to see your event page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {eventId ? `${event.name}'s` : "This event"} most current carpool
        opportunities. Get out there and make some new friends! skills...
      </h2>
      <EventForm />
    </div>
  );
};

export default Event;

//we want to import our single form into this return ^
