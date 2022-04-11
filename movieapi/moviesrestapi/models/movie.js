const mongoose = require('mongoose');
const movieschema = new mongoose.Schema({
    title :{
        type:String,
        required:true
    },
    year : {
        type:Number,
        required:true
    },
    releasedate :{
        type:Date
    }
});

const moviemodel = mongoose.model('movies',movieschema);
module.exports = moviemodel