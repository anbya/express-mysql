const express = require('express')

const router = express.Router()

const {getAllComment,addComment} = require("../controllers/comment")

const upload=require("../config/multer")

router.get("/", getAllComment);
router.post("/", addComment);

module.exports = router;