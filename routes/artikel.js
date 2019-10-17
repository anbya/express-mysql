const express = require('express')

const router = express.Router()

const {getAllArtikel,addArtikel,getArtikelById} = require("../controllers/artikel")

const upload=require("../config/multer")

router.get("/", getAllArtikel);
router.post("/id", getArtikelById);
router.post("/", upload.any(),addArtikel);

module.exports = router;