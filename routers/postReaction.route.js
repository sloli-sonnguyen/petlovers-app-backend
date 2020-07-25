const express = require('express');
const router = express.Router();
const controller = require('../controllers/postReaction.controller');

router.get('/:postId/by-postId', controller.getPostReactionsByPostId);

router.get('/:postReactionId/delete', controller.removePostReactionById);

router.post('/', controller.createPostReaction);

router.post('/:postReactionId/update', controller.updatePostReactionById);


module.exports = router;