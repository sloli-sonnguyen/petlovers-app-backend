const express = require('express');
const router = express.Router();
const controller = require('../controllers/follower.controller');

router.get('/by-userId/:userId', controller.getFollowersByUserId);

router.get('/:targetId/delete', controller.removeFollowerById);

router.post('/', controller.createFollower);


module.exports = router;