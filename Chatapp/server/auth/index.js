const passport = require('passport');
const config = require('../config');
const h = require('./index.js');
const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = () => {

    let authProcessor = (accessToken,refreshToken,profile,done) => {
        
        
    }


    passport.use(new FacebookStrategy(config.fb,authProcessor));
}