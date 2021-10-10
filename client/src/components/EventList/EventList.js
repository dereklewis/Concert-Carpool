import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row } from "react-bootstrap";

const EventList = ({ events }) => {
  if (!events.length) {
    return <h3>There are currently no events to carpool to!</h3>;
  }

  return (
    <div>
      <h3 className="text-primary"></h3>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {events &&
          events.map((event) => (
            <div key={event._id} className="col-12 col-xl-6">
              <Card className="text-center m-2">
                <Card.Header>{event.profile}</Card.Header>
                <Card.Body>
                  <Card.Title>{event.eventName}</Card.Title>
                  <Card.Text>{event.eventLocation}</Card.Text>
                  <Card.Text>{event.eventDate}</Card.Text>
                  <Card.Text>Are you a driver? {event.driver}</Card.Text>
                  <Card.Text>Are you a passenger? {event.passenger}</Card.Text>
                  <Card.Text>{event.notes}</Card.Text>
                  <Button variant="primary">Comment</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
              <Link
                className="btn btn-block btn-squared btn-light text-dark"
                to={`/events/${event._id}`}
              ></Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventList;
