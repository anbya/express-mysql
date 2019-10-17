const express = require('express')

const router = express.Router()

const {getAllArtikel,addArtikel,getArtikelById} = require("../controllers/events")

const upload=require("../config/multer")

router.get("/", getAllArtikel);
router.post("/id", getArtikelById);
router.post("/", addArtikel);

module.exports = router;