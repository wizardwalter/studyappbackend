const Question = require("../models/question.model");

module.exports.getQuestion = (req, res) => {
  Question.find({ test: req.params.id }).then((questions) => {
    res.status(200).json({ questions: questions });
  });
};

module.exports.writeQuestion = (req, res) => {
  const question = new Question({
    question: req.body.question,
    answers: req.body.answers,
    correct: req.body.correct,
    test: req.body.test,
  });
  question
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Question created!",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
