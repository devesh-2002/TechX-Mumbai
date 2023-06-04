import React,{ useState,useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const SuccessPage = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [dbUser, setDbUser] = useState({});
  const [event, setEvent] = useState({});

  useEffect(() => {
    const eventId = window.location.pathname.split("/")[2];
    const getUser = async () => {
      const response = await fetch(
        `http://localhost:5000/api/users/${user.email}`
      );
      const data = await response.json();
      console.log(data);
      setDbUser(data);
      const res2 = await fetch(`http://localhost:5000/api/users/update/${data._id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({attendedEvents: [...data.attendedEvents, eventId]})
      })
      console.log(res2)
    }

    const getEvent = async () => {
      const response = await fetch(
        `http://localhost:5000/api/events/${eventId}`
      );
      const data = await response.json();
      console.log(data);
    }

    // const updateUser = async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/api/users/update/${dbUser._id}`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-type': 'application/json'
    //       },
    //       body: JSON.stringify({events: [...dbUser.events, eventId]})
    //     }
    //   )
    //   console.log(response)
    // }


    // const updateUser = async () => {
    //   console.log(dbUser.attendedEvents)
    //   const response = await fetch(
    //     `http://localhost:5000/api/users/update/${dbUser._id}`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-type': 'application/json'
    //       },
    //       body: JSON.stringify({attendedEvents: dbUser.attendedEvents})
    //     }
    //   )
    //   console.log(response)
    // }


    getUser();
    
    getEvent();
  }, [user]);
  
  return (
    <div>SuccessPage</div>
  )
}

export default SuccessPage