const express = require('express');
const router = express.Router();
const {usersignup,userlogin,addusersignup,login} = require('../controllers/user')


router.get('/',usersignup)
router.get('/login',userlogin)
router.post('/signup',addusersignup)
router.post('/login',login)

module.exports = router