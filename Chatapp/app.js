const express = require('express');

const app = express();

const chatapp = require('./server');

// var cookieParser = require('cookie-parser');




app.set('port', process.env.PORT || 3000);

//Making use of the Ejs template Engine
app.set('view engine', 'ejs');

//Rendereing the static files
app.use(express.static('public'));

app.use(chatapp.session);


//The router
app.use('/', chatapp.router);



// app.use(cookieParser()); 


//The Router to the 404 page
app.use((req,res,next)=>{
    res.status('404').sendFile(process.cwd() + '/views/404.html');
});



app.listen(3000, () =>{
    console.log("Welcome to the port 3000");
})