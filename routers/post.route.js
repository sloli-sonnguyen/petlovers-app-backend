const express = require('express');
const router = express.Router();
const controller = require('../controllers/post.controller');

router.get('/', controller.getListPost);

router.get('/:postId', controller.getPostById);

router.get('/by-user/:userId/', controller.getPostByUserId);

router.get('/:postId/delete', controller.removePostById);

router.post('/', controller.createPost);





module.exports = router;