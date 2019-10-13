const express = require('express')

const router = express.Router()

const {getAllComment,addComment,getCommentByEvent} = require("../controllers/comment")

const upload=require("../config/multer")

router.get("/", getAllComment);
router.post("/", addComment);
router.post("/byid", getCommentByEvent);

module.exports = router;