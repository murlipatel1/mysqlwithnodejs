const express = require('express');
const postControllersUser = require('../controllers/postControllersUser')
const router = express.Router();

router.route('/').get(postControllersUser.getAllUsers).post(postControllersUser.createNewUser);

router.route('/:id').get(postControllersUser.getUserById)

module.exports = router;