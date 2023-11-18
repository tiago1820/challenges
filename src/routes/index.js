const router = require('express').Router();
const AuthController  = require('../controllers/authController');

// instances
const auth = new AuthController();

router.get('/login', (req, res) => auth.login(req, res));



module.exports = router;