const jwt = require('jsonwebtoken');



module.exports = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (token) {
        jwt.verify(token, process.env.jwt, function (err, payload) {
            if (err) return res.json({ success: false, code: 401, msg: err });

            req.tokenPayload = payload;
            next();
        });
    } else {
        return res.json({ success: false, code: 401, msg: "No accessToken found" });
    }
}