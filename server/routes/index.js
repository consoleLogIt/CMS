const express = require('express');
const router = express.Router();
const signIn_signUp_signOut_controller  = require('../controllers/api/signIn_signUp_signOut_controller');


router.post('/sign-in', signIn_signUp_signOut_controller.signIn);
router.post('/sign-up', signIn_signUp_signOut_controller.signUp);
router.post('/sign-out', signIn_signUp_signOut_controller.singOut);

// router.use('/teacher', require('./teacher'));
// router.use('/student', require('./student'));


module.exports = router;