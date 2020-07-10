const mongoose = require('mongoose');

const postReactionSchema = new mongoose.Schema({
    userId: String,
    postId: String,
    type: String // 'like', 'heart', 'sad' 
});

const PostReaction = mongoose.model('PostReaction', postReactionSchema, 'postReactions');

module.exports = PostReaction;