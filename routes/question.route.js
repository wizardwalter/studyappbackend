var express = require("express");
var router = express.Router();
var questionController = require('../controllers/question.controller');

router.get("/awssysops/:id", questionController.getQuestion);

router.post("/awssysops", questionController.writeQuestion);







module.exports = router;