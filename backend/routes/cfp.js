const express = require("express");
const router = express.Router();

const {
  getCFPs,
  getCFPById,
  createCFP,
  getCFPByEventId,
} = require("../controller/cfp");

router.route("/").get(getCFPs);
router.route("/:id").get(getCFPById);
router.route("/add").post(createCFP);
router.route("/event/:id").get(getCFPByEventId);

module.exports = router;
