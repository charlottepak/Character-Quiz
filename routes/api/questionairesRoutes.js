const express = require('express');
const router = express.Router();
const questionairesCtrl = require('../../controllers/questionaires');

router.post('/saveResult', questionairesCtrl.saveResult);


module.exports = router