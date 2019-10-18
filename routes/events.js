const express = require("express");

const router = express.Router();

const {
  getAllEvents,
  addEvents,
  getUnapproveEvent,
  getEventById,
  updateEvent,
  updateDetail,
  participateEvent,
  getApproveedEvent,
  getApproveedupcomingEvent,
  getApproveedthismonthEvent
} = require("../controllers/events");

const upload = require("../config/multer");

router.get("/", getAllEvents);
router.get("/unapprove", getUnapproveEvent);
router.get("/approved", getApproveedEvent);
router.get("/thismonth", getApproveedthismonthEvent);
router.get("/upcoming", getApproveedupcomingEvent);
router.post("/", addEvents);
router.post("/id", getEventById);
router.post("/update", updateEvent);
router.post("/participate", participateEvent);
router.post("/detail", upload.any(), updateDetail);

module.exports = router;
