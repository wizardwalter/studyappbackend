const mongoose = require('mongoose');


var questionSchema = new mongoose.Schema({
	question: String,
    answers: [String],
    correct: String,
    test: String
});

module.exports = mongoose.model('question', questionSchema);