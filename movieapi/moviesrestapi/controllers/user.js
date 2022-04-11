const usermodel = require('../models/user');
console.log(usermodel)

const usersignup = (req,res)=>{
    res.render('signup')
}

const userlogin = (req,res)=>{
    res.render('login')
}

const addusersignup = async(req,res)=>{
    const userdata = req.body
    console.log(req.body)
    try{
        const adduser = await usermodel.create(userdata)
        console.log(adduser)
        res.render('login')
    }catch(err){
        res.status(500).json({
            errObj:err
        })
    }
    // const {email,password,name} = req.body
    // if(email == adduser.email && password == adduser.password && name == adduser.name){
    //     console.log(req.session)
    //     req.session.emailID = email
    //     req.session.isLogged = true
    //     console.log(req.session)
    // }
}

const login = async(req,res)=>{
    const {email,password} = req.body
    try{
        let user = await usermodel.find({
            email : email,
            password : password
        });
        console.log(user)
        if (user[0].email==email && user[0].password==password){
            console.log(req.session)
            req.session.emailID = email
            req.session.isLogged = true
            console.log(req.session)
        }
        res.send('successfully login')
    }catch(err){
        res.status(500).json({
            message:'please signup first'
        })
    }
}

module.exports = {
    usersignup,
    userlogin,
    addusersignup,
    login
}