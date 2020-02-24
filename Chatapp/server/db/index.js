const config = require('../config');

const Mongoose = require('mongoose').connect(config.dbURI,{ useNewUrlParser: true, useUnifiedTopology: true });

//Log an error if the connection fails

// Mongoose.connection.on('error', err => {
//     console.log('MongoDB Error:',err)
// });


//Create a schema

// const chatUser = new Mongoose.Schema({
//     // profileId : String,
//     // fullName : String,
//     // profilePic: String

//     profileId: {
//         type : String
//     },
//     fullName: {
//         type: String
//     },
//     profilePic:{
//         type :String
//     }
// });

// //Turn the schema into a usable model

// let  userModel = Mongoose.model('chatUser', chatUser);


module.exports ={
    Mongoose,
    //userModel
}
