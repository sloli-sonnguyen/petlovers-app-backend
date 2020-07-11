const express = require('express');
const router = express.Router();
const controller = require('../controllers/postReaction.controller');

router.get('/by-postId/:postId', controller.getPostReactionsByPostId);

router.get('/:postReactionId/delete', controller.removePostReactionById);

router.post('/', controller.createPostReaction);

router.post('/:postReactionId/update', controller.updatePostReactionById);


module.exports = router;