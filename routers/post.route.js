const express = require('express');
const router = express.Router();
const controller = require('../controllers/post.controller');

router.get('/', controller.getListPost);

router.get('/:postId', controller.getPostById);

router.get('/by-user/:userId/', controller.getPostByUserId);

router.post('/', controller.createPost);

router.post('/:postId/delete', controller.removePostById);





module.exports = router;