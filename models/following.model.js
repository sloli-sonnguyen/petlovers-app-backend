const mongoose = require('mongoose');

const followingSchema = new mongoose.Schema({
    userId: String,
    targetId: String
});

const Following = mongoose.model('Following', followingSchema, 'followings');

module.exports = Following;