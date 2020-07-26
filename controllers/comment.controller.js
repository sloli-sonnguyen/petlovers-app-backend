const Comment = require('../models/comment.model');

module.exports.getComments = async (req, res) => {
    const comments = await Comment.find();
    res.json(comments);
}

module.exports.getCommentsByPostId = async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comment.find({ postId: postId });
    res.json(comments);
}

module.exports.getCommentsById = async (req, res) => {
    const commentId = req.params.commentId;
    const comments = await Post.find({ _id: commentId });
    res.json(comments);
}

module.exports.createComment = async (req, res) => {
    const newComment = await Comment.create(req.body);
    await newComment.save();
    res.send('Created new comment');
}

module.exports.removeCommentById = async (req, res) => {
    const commentId = req.params.commendId;
    await Comment.deleteOne({ _id: commentId });
    res.send('Done');
}

