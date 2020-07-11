const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

// config bcrypt password
const bcrypt = require('bcrypt');
const { use } = require('../routers/auth.route');
const saltRounds = 10;

module.exports.postSignup = async (req, res) => {
    const input = req.body;
    const email = input.email;
    const hadUserInDatabase = await User.findOne({ email: email });
    if (hadUserInDatabase) {
        return res.status(202).json({ success: false, msg: 'Tài khoản đã tồn tại' });
    }
    const password = input.password;
    const hashPass = await bcrypt.hash(password, saltRounds);
    input.password = hashPass;
    const newUser = await User.create(input);
    await newUser.save();
    res.send('Created new account');
}

module.exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const hadUserInDatabase = await User.findOne({ email: email });
    if (!hadUserInDatabase) {
        return res.status(202).json({ success: false, msg: "Email không tồn tại" });
    }
    if (!bcrypt.compareSync(password, hadUserInDatabase.password)) {
        return res.status(202).json({ success: false, msg: "Mật khẩu không đúng" });
    }
    //-----------------------
    const payload = { id: hadUserInDatabase._id };
    const accessToken = jwt.sign(payload, process.env.jwt, { expiresIn: 10 * 60 * 1000 });
    res.status(201).json({ success: true, accessToken });
}