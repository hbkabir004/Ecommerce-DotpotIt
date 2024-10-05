const express = require('express');
const { registerUser, loginUser, verifyUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/verify/:token', verifyUser);

module.exports = router;
