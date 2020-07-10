const mongoose = require('mongoose');

const commentReactionSchema = new mongoose.Schema({
    userId: String,
    commentId: String,
    type: String // 'like', 'heart', 'sad' 
});

const CommentReaction = mongoose.model('CommentReaction', commentReactionSchema, 'commentReactions');

module.exports = CommentReaction;