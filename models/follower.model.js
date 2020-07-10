const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
    userId: String,
    quantity: Number,
    content: Array
});

const Follower = mongoose.model('Follower', followerSchema, 'followers');

module.exports = Follower;