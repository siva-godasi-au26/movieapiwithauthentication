const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
  name :{
    type : String
  },
  email :{
    type : String   
  },
  password :{
    type: String
  },
  phonenumber :{
      type : Number
  }
})

const usermodel = mongoose.model('users',userschema);
module.exports = usermodel