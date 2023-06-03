const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const getUsers = async (req, res) => {
  res.status(200).json(await User.find());
};

const addUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    image,
    volunteeredEvents,
    organizedEvents,
    speakeratEvents,
    attendedEvents,
  } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    console.log("User already exist");
  }

  const user = await User.create({
    name,
    email,
    image,
    volunteeredEvents,
    organizedEvents,
    speakeratEvents,
    attendedEvents,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      volunteeredEvents: user.volunteeredEvents,
      organizedEvents: user.organizedEvents,
      speakeratEvents: user.speakeratEvents,
      attendedEvents: user.attendedEvents,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getUserfromemail = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.params.email });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    console.log("User not found");
  }
});

module.exports = { getUsers, addUser, getUserfromemail };
