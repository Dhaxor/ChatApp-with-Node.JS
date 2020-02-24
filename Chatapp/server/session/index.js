const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const config = require('../config');

const db = require('../db');

if(process.env.Node_ENV === 'production'){
    //Initialise Session with settings for production
    module.exports = session({
        secret : config.sessionSecret,
        resave:false,
        saveUninitialized:false,
        store: new MongoStore({
            mongooseConnection: db.Mongoose.connection
        })
    });
}
else{
   //Initialise Sesssion with settings for development

   module.exports = session({
       secret: config.sessionSecret,
       resave:false,
       saveUninitialized:true
   });
}