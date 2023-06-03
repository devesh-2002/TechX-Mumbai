const express = require("express");
const router = express.Router();

const { getCFPs, getCFPById, createCFP } = require("../controller/cfp");

router.route("/").get(getCFPs);
router.route("/:id").get(getCFPById);
router.route("/add").post(createCFP);

module.exports = router;
