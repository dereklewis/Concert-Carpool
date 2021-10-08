import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events, title }) => {
  if (!events.length) {
    return <h3>There are currently no events to carpool to!</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {events &&
          events.map((event) => (
            <div key={event._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {event.name} <br />
                  {/* <span className="text-white" style={{ fontSize: '1rem' }}>
                        currently has {profile.skills ? profile.skills.length : 0}{' '}
                        endorsed skill
                        {profile.skills && profile.skills.length === 1 ? '' : 's'}
                      </span> */}
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/events/${event._id}`}
                >
                  Check out this concert goer's event listing!
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventList;
