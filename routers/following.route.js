const express = require('express');
const router = express.Router();
const controller = require('../controllers/following.controller');

router.get('/by-userId/:userId', controller.getFollowingsByUserId);

router.get('/:targetId/delete', controller.removeFollowingById);

router.post('/', controller.createFollowing);


module.exports = router;