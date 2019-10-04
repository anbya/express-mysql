const express = require('express')

const router = express.Router()

const {getAllContent,addContent} = require("../controllers/content")

const upload=require("../config/multer")

router.get("/", getAllContent);
router.post("/", upload.any(),addContent);
// router.post("/", upload.any(),addUser);

module.exports = router;