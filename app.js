const express = require('express');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');


// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));


//Static files
app.use(express.static('public'))
app.use('css', express.static(__dirname + 'public/css'));
app.use('js', express.static(__dirname + 'public/js'));
app.use('assets', express.static(__dirname + 'public/assets'));



//Setup routes

const homeRouter = require('./routes/homeRouter');

app.use('/', homeRouter);


app.listen(port, ()=>{
    console.log(`listening on port localhost ${port}`);
});
