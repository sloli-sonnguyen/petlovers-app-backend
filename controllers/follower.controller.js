const Follower = require('../models/follower.model');

module.exports.getFollowersByUserId = async (req, res) => {
    const userId = req.params.userId;
    const followers = await Follower.find({ userId: userId });
    res.json(followers);
}

module.exports.createFollower = async (req, res) => {
    const newFollower = await Follower.create(req.body);
    await newFollower.save();
    res.send('Created new follower');
}

module.exports.removeFollowerById = async (req, res) => {
    const id = req.params.targetId;
    await Follower.deleteOne({ _id: id });
    res.send('Done');
}

