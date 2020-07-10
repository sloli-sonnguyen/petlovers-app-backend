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






// app use
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute)




// listen for request
const listener = app.listen(port, () => {
    console.log('App is listening at port', port);
});



