const PostReaction = require('../models/postReaction.model');

module.exports.getPostReactionsByPostId = async (req, res) => {
    const postId = req.params.postId;
    console.log('sadasdasdasdasda', postId);
    const postReactions = await PostReaction.find({ postId: postId });
    res.json(postReactions);
}

module.exports.createPostReaction = async (req, res) => {
    const newPostReaction = await PostReaction.create(req.body);
    await newPostReaction.save();
    res.send('Created new post reaction');
}

module.exports.updatePostReactionById = async (req, res) => {
    const query = { _id: req.body.postReactionId };
    const update = {
        ...req.body
    };
    await PostReaction.findOneAndUpdate(query, update);
    res.send('Done');
}

module.exports.removePostReactionById = async (req, res) => {
    const postReactionId = req.params.postReactionId;
    await PostReaction.deleteOne({ _id: postReactionId });
    res.send('Done');
}

