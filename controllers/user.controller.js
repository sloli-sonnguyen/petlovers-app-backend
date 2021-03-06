const User = require('../models/user.model');

module.exports.getUserById = async (req, res) => {
    const userId = req.params.userId;
    const user = await User.find({ _id: userId });
    res.json(user);
}

module.exports.removeUserById = async (req, res) => {
    const userId = req.params.userId;
    await User.deleteOne({ _id: userId });
    res.send('Done');
}

module.exports.updateUserById = async (req, res) => {
    const query = { _id: req.params.userId };
    const update = {
        ...req.body
    };
    await User.findOneAndUpdate(query, update);
    res.send('Done');
}

module.exports.getAllUsersInfo = async (req, res) => {
    console.log('hi');
    User.find({}, 'name introduce avatarUrl backgroundUrl', function (err, docs) {
        res.json(docs);
    });
}

module.exports.getInfoUserById = async (req, res) => {
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId });
    const info = {
        _id: userId,
        name: user.name,
        introduce: user.introduce,
        avatarUrl: user.avatarUrl,
        backgroundUrl: user.backgroundUrl,
    }
    res.json(info);
}

module.exports.searchUser = async (req, res) => {
    let searchName = req.query.name;
    let users = await User.find();
    if (searchName) {
        users = users.filter(user => {
            return user.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
        });
    }
    res.json(users);
}

