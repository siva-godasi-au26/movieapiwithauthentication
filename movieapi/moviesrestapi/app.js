const express = require('express');
const app = express();

require('dotenv').config()
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
const ejs = require('ejs');
app.set('view engine','ejs')

const session = require('express-session')
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge :1000*60*60*100000},
    name : `session-id`
}))

const {userdbconnection} = require('./dbconnections/user')
userdbconnection()

const userrouter = require('./routes/user');
const movierouter = require('./routes/movie');

app.use('/',userrouter);
app.use('/',movierouter);

const PORT = process.env.PORT || 3000
app.listen(PORT)