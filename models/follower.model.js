const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
    userId: String,
    targetId: String
});

const Follower = mongoose.model('Follower', followerSchema, 'followers');

module.exports = Follower;