const express = require('express');
const router = require('express').Router();
const multer = require('multer');

const UserController = require('../controllers/UserController');
const EventController = require('../controllers/EventController');

const uploadConfig = require('../config/upload');
const upload = multer(uploadConfig);


router.get('/status', (req, res) => {
    res.send({ status: 200 })
});

// Event Routes
router.post('/event', upload.single('thumbnail'), EventController.createEvent);

// User Routes
router.post('/user/register', UserController.creatUser);
router.get('/user/:userId', UserController.getUserById);

module.exports = routes;