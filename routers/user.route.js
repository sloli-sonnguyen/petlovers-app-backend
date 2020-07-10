const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/', controller.searchUser);

router.get('/:userId', controller.getUserById);

router.get('/:userId/info', controller.getInfoUserById);

router.post('/', controller.createUser);

router.post('/:userId/delete', controller.removeUserById);

router.post('/update', controller.updateUserById);




module.exports = router;