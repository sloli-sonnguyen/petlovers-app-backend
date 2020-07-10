const express = require('express');
const router = express.Router();
const controller = require('../controllers/comment.controller');

router.get('/', controller.getComments);

router.get('/by-postId/:postId', controller.getCommentsByPostId);

router.get('/:commendId', controller.getCommentsById);

router.get('/:commendId/delete', controller.removeCommentById);

router.post('/', controller.createComment);



module.exports = router;