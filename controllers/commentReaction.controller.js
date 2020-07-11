const CommentReaction = require('../models/commentReaction.model');

module.exports.getPostReactionsByCommentId = async (req, res) => {
    const commentId = req.params.commentId;
    const commentReactions = await CommentReaction.find({ commentId: commentId });
    res.json(commentReactions);
}

module.exports.createCommentReaction = async (req, res) => {
    const newCommentReaction = await CommentReaction.create(req.body);
    await newCommentReaction.save();
    res.send('Created new comment reaction');
}

module.exports.updateCommentReactionById = async (req, res) => {
    const query = { _id: req.body.commentReactionId };
    const update = {
        ...req.body
    };
    await CommentReaction.findOneAndUpdate(query, update);
    res.send('Done');
}

module.exports.removeCommentReactionById = async (req, res) => {
    const commentReactionId = req.params.commentReactionId;
    await CommentReaction.deleteOne({ _id: commentReactionId });
    res.send('Done');
}

