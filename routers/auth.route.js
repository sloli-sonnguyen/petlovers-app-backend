const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');

router.post('/signup', controller.postSignup);
router.post('/login', controller.postLogin);

module.exports = router;