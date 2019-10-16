const express = require('express')

const router = express.Router()

const {getAllEvents,addEvents,getUnapproveEvent,getEventById,updateEvent,participateEvent,getApproveedEvent} = require("../controllers/events")

const upload=require("../config/multer")

router.get("/", getAllEvents);
router.get("/unapprove", getUnapproveEvent);
router.get("/approved", getApproveedEvent);
router.get("/id", getEventById);
router.post("/", addEvents);
router.post("/update", updateEvent);
router.post("/participate", participateEvent);

module.exports = router;