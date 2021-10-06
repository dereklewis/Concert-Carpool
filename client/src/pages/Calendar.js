//concert calendar of events -- api call

import React, { useState, useEffect } from "react";

function Calendar() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.seatgeek.com/2/events/?client_id=MjM3NzI3ODd8MTYzMzU0MDY3NC4zNTI5MjA1&client_secret=0fdc156151875a2dc1cdbc53d8c92b8f2fb285b057f2d750a78e4b2956d6e2fa"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      {isLoaded ? (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <span>Hmm... seems that there are no concerts popping up here!</span>
      )}
    </div>
  );
}

export default Calendar;

//https://api.seatgeek.com/2/events -u MjM3NzI3ODd8MTYzMzU0MDY3NC4zNTI5MjA1:0fdc156151875a2dc1cdbc53d8c92b8f2fb285b057f2d750a78e4b2956d6e2fa

//https://api.seatgeek.com/2/venues/632/?client_id=MjM3NzI3ODd8MTYzMzU0MDY3NC4zNTI5MjA1&client_secret=0fdc156151875a2dc1cdbc53d8c92b8f2fb285b057f2d750a78e4b2956d6e2fa
