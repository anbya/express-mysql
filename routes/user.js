const express = require('express')

const router = express.Router()

const {getAllUser} = require("../controllers/user")

router.get("/", getAllUser);

module.exports = router;