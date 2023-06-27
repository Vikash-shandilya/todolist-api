const express = require("express");
const router = express.Router();

const tasktodocontroller = require("../controller/tasktodo");

router.get("/", tasktodocontroller.indexpage);

router.post("/submitform", tasktodocontroller.submitform);

router.get("/delete/:productid", tasktodocontroller.delete);

module.exports = router;
