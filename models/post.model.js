const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: String,
    caption: String,
    imageUrl: String,
    createAt: String
});

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;