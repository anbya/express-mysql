const express = require('express')

const router = express.Router()

const {getAllEvents,addEvents} = require("../controllers/events")

const upload=require("../config/multer")

router.get("/", getAllEvents);
router.post("/", addEvents);

module.exports = router;