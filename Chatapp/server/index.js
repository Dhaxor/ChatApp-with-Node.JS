const router = require('express').Router();
const db = require('../server/db');

router.get('/',(req,res,next) => {
    // res.send('<h1>This is what i want to send</h1>');
    // res.sendFile(__dirname + '/views/login.html');
    res.render('login',{
        pageTitle: 'My Login Page'
    });
});


router.get('/dashboard',(req,res,next) => {
    res.send('<h1>This is the dashboard</h1>');
});

router.get('/info', (req,res,next) => {
    res.send('This is Info');
});

router.get('/chat', (req,res,next) => {
    res.render('chatroom');
});


router.get('/getsession', (req,res,next) => {
    res.send('My favourite color: ' + req.session.favColor);
});


router.get('/setsession', (req,res,next) => {
    req.session.favColor = "Red";
    res.send('Session sent');
});

// router.get('/setsession', function(req , res , next){
//     req.session.favColor = 'Red';
//     res.send('Setting favourite color ...!');
// });

// router.get('/getsession', function(req , res , next){
//     res.send('Favourite Color : ' + (req.session.favColor == undefined?"NOT FOUND":req.session.favColor));
// });

//Find a Single user based on a key

let findOne = profileID => {
    return db.userModel.findOne({
        'profileId' : profileID
    });
}


module.exports = {
    router,
    session :require('./session')
};