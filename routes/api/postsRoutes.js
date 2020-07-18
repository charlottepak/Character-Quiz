const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.post('/saveResult', postsCtrl.saveResult);


module.exports = router