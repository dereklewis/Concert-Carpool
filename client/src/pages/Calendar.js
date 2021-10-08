import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

function Calendar() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.seatgeek.com/2/events/?client_id=MjM3NzI3ODd8MTYzMzU0MDY3NC4zNTI5MjA1&client_secret=0fdc156151875a2dc1cdbc53d8c92b8f2fb285b057f2d750a78e4b2956d6e2fa&venue.state=CO"
        );
        const data = await response.json();
        console.log("events", data);
        setEvents(data.events);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <ol>
            {events.map((event) => (
              <Card style={{ width: "18rem" }} key={event.id}>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                  src={event.performers[0].image}
                />
                <Card.Body>
                  <Card.Title>{event.performers[0].name}</Card.Title>
                  <Card.Text>{event.venue.name}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{event.venue.address}</ListGroupItem>
                  <ListGroupItem>{event.datetime_local}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href={event.url}>Buy Tickets</Card.Link>
                </Card.Body>
                {/* <p>{event.performers[0].name}</p>
                <p>{event.venue.name}</p>
                <p>{event.venue.address}</p>
                <p>{event.datetime_local}</p>
                <p>{event.url}</p> */}
              </Card>
            ))}
          </ol>
        </>
      )}
      {error && (
        <span>Hmm... seems that there are no concerts popping up here!</span>
      )}
    </div>
  );
}

export default Calendar;

//https://api.seatgeek.com/2/events -u MjM3NzI3ODd8MTYzMzU0MDY3NC4zNTI5MjA1:0fdc156151875a2dc1cdbc53d8c92b8f2fb285b057f2d750a78e4b2956d6e2fa

//https://api.seatgeek.com/2/venues/632/?client_id=MjM3NzI3ODd8MTYzMzU0MDY3NC4zNTI5MjA1&client_secret=0fdc156151875a2dc1cdbc53d8c92b8f2fb285b057f2d750a78e4b2956d6e2fa
