const port = process.env.PORT || 3000;
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

// app use
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/followers', followerRoute);
app.use('/api/v1/followings', followingRoute);
app.use('/api/v1/postReactions', postReactionRoute);
app.use('/api/v1/commentReactions', commentReactionRoute);

// listen for request
const listener = app.listen(port, () => {
    console.log('App is listening at port', port);
});



