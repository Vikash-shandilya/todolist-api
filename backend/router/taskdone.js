const express = require("express");
const router = express.Router();

const taskdonecontroller = require("../controller/taskdone");

router.get("/checkbox_clicked/:productid", taskdonecontroller.checkbox_clicked);
router.get("/clicked/:productid", taskdonecontroller.clicked);

module.exports = router;
