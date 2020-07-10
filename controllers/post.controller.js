const Post = require('../models/post.model');
const { post } = require('../routers/post.route');

module.exports.getListPost = async (req, res) => {
    const posts = await User.find();
    res.json(posts);
}

module.exports.getPostById = async (req, res) => {
    const postId = req.params.postId;
    const post = await Post.find({ _id: postId });
    res.json(post);
}

module.exports.getPostByUserId = async (req, res) => {
    const userId = req.params.userId;
    const posts = await Post.find({ userId: userId });
    res.json(posts);
}

module.exports.createPost = async (req, res) => {
    console.log(req.body);
    const newPost = await Post.create(req.body);
    await newPost.save();
    res.send('Created new post');
}

module.exports.removePostById = async (req, res) => {
    const postId = req.params.postId;
    await Post.deleteOne({ _id: postId });
    res.send('Done');
}


// module.exports.searchPost = async (req, res) => {
//     let searchName = req.query.name;
//     let users = await User.find();
//     if (searchName) {
//         users = users.filter(user => {
//             return user.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
//         });
//     }
//     res.json(users);
// }