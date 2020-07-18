const port = process.env.PORT || 5000;
const express = require('express');
var bodyParser = require('body-parser');

// env
require('dotenv').config()

// connect mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected")
});

// App
const app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// require routers, middleware, validate
const userRoute = require('./routers/user.route');
const postRoute = require('./routers/post.route');
const commentRoute = require('./routers/comment.route');
const followerRoute = require('./routers/follower.route');
const followingRoute = require('./routers/following.route');
const postReactionRoute = require('./routers/postReaction.route');
const commentReactionRoute = require('./routers/commentReaction.route');
const authRoute = require('./routers/auth.route');

// middleware
const authMiddleware = require('./middleware/auth.middleware');

// app use

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api/v1/users', authMiddleware, userRoute);
app.use('/api/v1/posts', authMiddleware, postRoute);
app.use('/api/v1/comments', authMiddleware, commentRoute);
app.use('/api/v1/followers', authMiddleware, followerRoute);
app.use('/api/v1/followings', authMiddleware, followingRoute);
app.use('/api/v1/postReactions', authMiddleware, postReactionRoute);
app.use('/api/v1/commentReactions', authMiddleware, commentReactionRoute);
app.use('/api/v1/auth', authRoute);

// listen for request
const listener = app.listen(port, () => {
    console.log('App is listening at port', port);
});



