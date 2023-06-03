const express = require("express");
const router = express.Router();

const { getUsers, addUser, getUserfromemail } = require("../controller/user");

router.route("/").get(getUsers);
router.route("/add").post(addUser);
router.route("/:email").get(getUserfromemail);

module.exports = router;
