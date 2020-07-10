const Following = require('../models/following.model');

module.exports.getFollowingsByUserId = async (req, res) => {
    const userId = req.params.userId;
    const followings = await Following.find({ userId: userId });
    res.json(followings);
}

module.exports.createFollowing = async (req, res) => {
    const newFollowing = await Following.create(req.body);
    await newFollowing.save();
    res.send('Created new Following');
}

module.exports.removeFollowingById = async (req, res) => {
    const id = req.params.targetId;
    await Following.deleteOne({ _id: id });
    res.send('Done');
}

