const express = require('express')

const router = express.Router()

const {getAllContent,addContent,testGet} = require("../controllers/content")

const upload=require("../config/multer")

router.get("/", getAllContent);
router.get("/testget", testGet);
router.post("/", upload.any(),addContent);
// router.post("/", upload.any(),addUser);

module.exports = router;