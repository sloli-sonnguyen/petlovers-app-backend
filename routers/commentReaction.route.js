const express = require('express');
const router = express.Router();
const controller = require('../controllers/commentReaction.controller');

router.get('/by-commentId/:commentId', controller.getPostReactionsByCommentId);

router.get('/:commentReactionId/delete', controller.removeCommentReactionById);

router.post('/', controller.createCommentReaction);

router.post('/:commentReactionId/update', controller.updateCommentReactionById);

module.exports = router;