const express = require("express");
const router = express.Router();

const {
  getUsers,
  addUser,
  getUserfromemail,
  updateUser,
} = require("../controller/user");

router.route("/").get(getUsers);
router.route("/add").post(addUser);
router.route("/:email").get(getUserfromemail);
router.route("/update/:id").put(updateUser);

module.exports = router;
