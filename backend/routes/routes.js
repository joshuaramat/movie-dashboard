const express = require('express');
const router = require('express').Router();
const multer = require('multer');

const UserController = require('../controllers/UserController');
const EventController = require('../controllers/EventController');
const RegistrationController = require('../controllers/RegistrationController');
const ApprovalController = require('../controllers/ApprovalController');
const RejectionController = require('../controllers/RejectionController');

const uploadConfig = require('../config/upload');
const RegistrationController = require('../controllers/RegistrationController');
const upload = multer(uploadConfig);


router.get('/status', (req, res) => {
    res.send({ status: 200 })
});

// Registration Routes
router.post('/registration/:eventId', RegistrationController.create);
router.get('/registration/:registration_id', RegistrationController.getRegistration);
router.post('/registration/:registration_id/approval', ApprovalController.approval);
router.post('/registration/:registration_id/rejection', RejectionController.rejection);

// Event Routes
router.post('/event', upload.single('thumbnail'), EventController.createEvent);
router.get('/event/:eventId', EventController.getEventById);

// User Routes
router.post('/user/register', UserController.creatUser);
router.get('/user/:userId', UserController.getUserById);

module.exports = routes;