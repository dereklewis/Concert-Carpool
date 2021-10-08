import React from "react";
import { useQuery } from "@apollo/client";

import EventList from "../components/EventList/EventList";

import { QUERY_EVENTS } from "../utils/queries";

const Events = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList
              events={events}
              title="Here are all the current events! Reach out to a fellow concert goer to carpool!!"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;
