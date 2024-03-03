const express = require("express");

const jobController = require("../Controller/job");

const router = express.Router();

router.post("", jobController.createJob );

router.get("", jobController.getJob );

router.patch("", jobController.updateJob );

router.delete("", jobController.deleteJob );


module.exports = router;