const Event = require("../models/event");
const asyncHandler = require("express-async-handler");
let nodemailer = require("nodemailer");
const getEvents = async (req, res) => {
  res.status(200).json(await Event.find().populate("organizer"));
};

const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404);
    console.log("Event not found");
  }
};

const updateEventApproval = asyncHandler(async (req, res) => {
  const email = req.body.email;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "2020.sarvesh.limaye@ves.ac.in",
      pass: process.env.password,
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  let mailOptions = {
    from: "2020.sarvesh.limaye@ves.ac.in",
    to: email,
    subject: "[TechX Mumbai] Event Registration Approved",
    html: `
    <p>Your registration for event is approved</p>
    </p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent");
    }
  });

  const event = await Event.findByIdAndUpdate(req.params.id, {
    isApproved: true,
    function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Updated User : ", docs);
      }
    },
  });
});

const createEvent = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    time,
    date,
    image,
    mode,
    location,
    price,
    speakerApplications,
    speakers,
    attendees,
    volunteers,
    tickets,
    volunteersApplications,
    organizer,
    domain,
  } = req.body;

  const event = await Event.create({
    title,
    description,
    time,
    date,
    image,
    mode,
    location,
    price,
    speakerApplications,
    speakers,
    attendees,
    volunteers,
    tickets,
    volunteersApplications,
    organizer,
    domain,
  });

  if (event) {
    res.status(201).json({
      _id: event._id,
      title: event.title,
      description: event.description,
      time: event.time,
      date: event.date,
      image: event.image,
      mode: event.mode,
      location: event.location,
      price: event.price,
      speakerApplications: event.speakerApplications,
      speakers: event.speakers,
      attendees: event.attendees,
      volunteers: event.volunteers,
      tickets: event.tickets,
      volunteersApplications: event.volunteersApplications,
      organizer: event.organizer,
      domain: event.domain,
    });
  } else {
    res.status(400);
    console.log("Invalid event data");
  }
});

module.exports = { getEvents, getEventById, createEvent, updateEventApproval };
