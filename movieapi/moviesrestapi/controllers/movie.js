const moviemodel = require('../models/movie')
console.log(moviemodel)


const postmovie = async(req,res)=>{
    const movieData = req.body;
    console.log(movieData);
    try {
        const addmovie = await moviemodel.create(movieData);
        res.send(addmovie);
    }catch(err) {
        res.status(500).json({
          errObj: err,
        });
    }
}

const getmovies = async(req,res)=>{
    try {
        const movieData = await moviemodel.find({});
        res.send(movieData);
    } catch (err) {
        res.status(500).json({
          errObj: err,
        });
    }
}

const updatemovie = async(req,res)=>{
    const updateMovieData = req.body
    const { movieId } = req.params
  
    try {
      const updateResult = await moviemodel.findByIdAndUpdate(movieId, updateMovieData)
      res.send(updateResult)
    } catch (err) {
      res.status(500).json({
        errObj: err
      })
    }
}

const deletemovie = async(req,res)=>{
    const { movieId } = req.params;
  try {
    const deletemovie = await moviemodel.findByIdAndDelete(movieId);
    res.send(deletemovie)
  } catch (err) {
    res.status(500).json({
      errObj: err,
    });
  }
}

const getmovie = async(req,res)=>{
    const { movieId } = req.params
  try {
    const movieData = await postsmodel.findById((movieId))

    if (!movieData) {
      return res.status(404).send({
        message: "Movie Not found"
      })
    }
    res.send(movieData)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }
}

module.exports = {
    postmovie,getmovies,updatemovie,deletemovie,getmovie
}