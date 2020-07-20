const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);

router.use(require('../../config/auth'));
router.post('/', checkAuth, postsCtrl.create);
router.get('/:id', postsCtrl.show);
router.put('/:id', checkAuth, postsCtrl.update);
router.delete('/:id', postsCtrl.delete);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router