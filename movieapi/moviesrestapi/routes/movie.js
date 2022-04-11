const express = require('express');
const router = express.Router();
const {authuser} = require('../authorise.js') 
const {postmovie,getmovie,updatemovie,deletemovie,getmovies} = require('../controllers/movie')

router.get('/movie',authuser,getmovies)
router.post('/movie',authuser,postmovie)
router.get('/movie/:movieId',authuser,getmovie)
router.put('/movie/:movieId',authuser,updatemovie)
router.delete('/movie/:movieId',authuser,deletemovie)

module.exports = router