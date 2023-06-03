const express = require("express");
const router = express.Router();

const {
  getEvents,
  getEventById,
  createEvent,
  updateEventApproval,
  updateAttendees,
} = require("../controller/event");

router.route("/").get(getEvents);
router.route("/:id").get(getEventById);
router.route("/add").post(createEvent);
router.route("/approval/:id").put(updateEventApproval);
router.route("/attendees/:id").put(updateAttendees);

module.exports = router;
