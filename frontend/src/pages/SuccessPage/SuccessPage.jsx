import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SuccessPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [dbUser, setDbUser] = useState({});
  const [event, setEvent] = useState({});

  const eventId = window.location.pathname.split("/")[2];
  const getUser = async () => {
    const response = await fetch(
      `http://localhost:5000/api/users/${user.email}`
    );
    const data = await response.json();
    console.log(data);
    setDbUser(data);

    if(eventId){
      var ind = data.attendedEvents.indexOf(eventId);
      if (ind == -1) {
        const res2 = await fetch(
          `http://localhost:5000/api/users/update/${data._id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              attendedEvents: eventId,
            }),
          }
        );
        console.log(res2);
      }
    }
  };

  const getEvent = async () => {
    const response = await fetch(
      `http://localhost:5000/api/events/${eventId}`
    );
    const data = await response.json();
    console.log(data);
    setEvent(data);

    var ind = data.attendees.indexOf(dbUser._id);
    if(dbUser._id ) {
      if (ind == -1) {
        const res2 = await fetch(
          `http://localhost:5000/api/events/attendees/${eventId}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              attendees: dbUser._id,
            }),
          }
        );
        console.log(res2);
      }
    }
  };
  const handleClick = async () => {
    getUser();
    getEvent();
  }

  return <div>
    {user && (
      <button onClick={handleClick}>
        Back to Home Page
        </button>

    )}
  </div>;
};

export default SuccessPage;
