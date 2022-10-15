const express = require('express');
const { getQuestions, createQuestions , updateQuestions, deleteQuestions, getQuestion } = require('../controllers/functionsforquiz');
const router = express.Router();


router.route('/getQuestions').get(getQuestions);
router.route('/getQuestion/:id').get(getQuestion);
router.route('/createQuestions').post(createQuestions);
router.route('/updateQuestions/:id').put(updateQuestions);
router.route('/deleteQuestions/:id').delete(deleteQuestions)

module.exports = router; 