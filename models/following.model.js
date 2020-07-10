const mongoose = require('mongoose');

const followingSchema = new mongoose.Schema({
    userId: String,
    quantity: Number,
    content: Object
});

const Following = mongoose.model('Following', followingSchema, 'followings');

module.exports = Following;