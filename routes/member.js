const express = require('express')

const router = express.Router()

const {getAllMember,deleteMember,updateMember,getOneMember,addMember} = require("../controllers/member")

router.get("/", getAllMember);
router.get("/onemember", getOneMember);
router.get("/test", addMember);
router.delete("/", deleteMember);
router.put("/", updateMember);

module.exports = router;