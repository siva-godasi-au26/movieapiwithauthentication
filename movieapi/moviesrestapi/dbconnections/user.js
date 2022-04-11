const mongoose = require('mongoose');

async function userdbconnection(){
    await mongoose.connect(process.env.USERDB_URL,(err)=>{
        if(err){
            console.log("not connected to usersbd")
        }else{
            console.log("connected to usersdb")
        }
    });
}

module.exports = {
    userdbconnection
}