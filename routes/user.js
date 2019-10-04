const express = require('express')

const router = express.Router()

const {getAllUser,addUser,loginUser} = require("../controllers/user")

// const upload=require("../config/multer")

router.get("/", getAllUser);
router.post("/login", loginUser);
router.post("/", addUser);
// router.post("/", upload.any(),addUser);

module.exports = router;