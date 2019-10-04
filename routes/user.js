const express = require('express')

const router = express.Router()

const {getAllUser,addUser} = require("../controllers/user")

// const upload=require("../config/multer")

router.get("/", getAllUser);
router.post("/", addUser);
// router.post("/", upload.any(),addUser);

module.exports = router;