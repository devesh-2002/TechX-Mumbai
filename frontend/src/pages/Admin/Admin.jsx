import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import AdminCard from "../../components/AdminCard/AdminCard";

const Admin = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch("http://localhost:5000/api/events");
      const data = await response.json();
      setEvents(data);
    };

    getEvents();
  }, []);

  return (
    <div>
      <Flex templateColumns="repeat(4, 1fr)" gap={4} minW={100} m={8}>
        {events.map((event) => (
          <AdminCard
            key={event._id}
            id={event._id}
            title={event.title}
            description={event.description}
            isApproved={event.isApproved}
            time={event.time}
            date={event.date}
            image={event.image}
            mode={event.mode}
            location={event.location}
            price={event.price}
            speakerApplications={event.speakerApplications}
            speakers={event.speakers}
            attendees={event.attendees}
            volunteers={event.volunteers}
            tickets={event.tickets}
            volunteersApplications={event.volunteersApplications}
            organizer={event.organizer}
            domain={event.domain}
          />
        ))}
      </Flex>
    </div>
  );
};

export default Admin;
