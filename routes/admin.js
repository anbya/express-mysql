const express = require('express')

const router = express.Router()

const {getAllAdmin,addAdmin,loginAdmin} = require("../controllers/admin")

const upload=require("../config/multer")

router.get("/", getAllAdmin);
router.post("/", addAdmin);
router.post("/login", loginAdmin);

module.exports = router;