const express = require('express')

const router = express.Router()

const {getAllEvents,addEvents,getUnapproveEvent,getEventById,updateEvent,updateEventDetail,participateEvent,getApproveedEvent,getApproveedupcomingEvent,getApproveedthismonthEvent} = require("../controllers/events")

const upload=require("../config/multer")

router.get("/", getAllEvents);
router.get("/unapprove", getUnapproveEvent);
router.get("/approved", getApproveedEvent);
router.get("/thismonth", getApproveedthismonthEvent);
router.get("/upcoming", getApproveedupcomingEvent);
router.post("/id", getEventById);
router.post("/", addEvents);
router.post("/update", updateEvent);
router.post("/detail", updateEventDetail);
router.post("/participate", participateEvent);

module.exports = router;