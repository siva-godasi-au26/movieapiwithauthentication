
const authuser = (req, res, next) => {
    console.log(req.session)
    if (req.session.emailID && req.session.isLogged == true) {
      next()
    } else {
      res.send('please signupfirst')
    }
  }
  
  module.exports = {
    authuser
  }