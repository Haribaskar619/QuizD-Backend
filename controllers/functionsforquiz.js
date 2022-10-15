const questionModel = require("../models/question");

const getQuestions = async (req, res) => {
  try {
    // getting data from db
    const questions = await questionModel.find({});

    if (questions) {
      res.json(questions);
    }
  } catch (error) {
    console.log(error);
  }
};
const getQuestion = async (req, res) => {
  try {
    // getting data from db
    const questions = await questionModel.findById(req.params.id);

    if (questions) {
      res.json(questions);
    }
  } catch (error) {
    console.log(error);
  }
};

const createQuestions = async (req, res) => {
  try {
    const question = new questionModel({
      question: req.body.question,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      answer: req.body.answer,
    });

    const createData = await question.save();

    if (createData) {
      res.send(createData);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateQuestions = async (req, res) => {
  try {
    const getQues = await questionModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (getQues) {
      res.send("Updated successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteQuestions = async (req, res) => {
  try {
    const delQues = await questionModel.findByIdAndDelete(req.params.id);
    if (delQues) {
      res.send("Deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getQuestions,
  createQuestions,
  updateQuestions,
  deleteQuestions,
  getQuestion,
};
