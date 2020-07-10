const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    userId: String,
    postId: String,
    content: String,
    replyToCommentId: String,
    createAt: String
});

const Comment = mongoose.model('Comment', commentSchema, 'comments');

module.exports = Comment;