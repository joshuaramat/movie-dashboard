const express = require('express')
const multer = require('multer')

const UserController = require('controllers/UserController')
const EventController = require(".controllers/EventController");
const DashboardController = require('./controllers/DashboardController');
const LoginController = require('./controllers/LoginController');
const RegistrationController = require('../controllers/RegistrationController');
const ApprovalController = require('../controllers/ApprovalController');
const RejectionController = require('../controllers/RejectionController');
const uploadConfig = require('./config/upload');

const router = express.Router();
const upload = multer(uploadConfig);

router.get('/status', (req, res)=> {
    res.send({ status: 200 })
})

// Registration
router.post('/registration/:eventId', RegistrationController.create);
router.get('/registration/:registration_id', RegistrationController.getRegistration);
router.post('/registration/:registration_id/approvals', ApprovalController.approval);
router.post('/registration/:registration_id', RejectionController.rejection);

//Login
router.post('/login', LoginController.store)

// Dashboard
router.get('/dashboard/:movie', DashBoardController.getAllEvents)
router.get('/dashboard', DashboardController.getAllEvents)
router.get('/event/:eventId', DashboardController.getEventById)

//Events
router.post('/event', upload.single("thumbnail"),EventController.createEvent)
router.delete('/event/:eventId', EventController.delete)

//User
router.post('/user/register', UserController.createUser)
router.get('/user/:userId', UserController.getUserById)

module.exports = router;