var express = require('express');
var morgan = require('morgan');
var cors = require("cors");
var app = express();
var corsOptions = {origin: true, optionSuccessStatus: 200}


app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));

var incremental = 0;

app.listen(8080, function(){
    console.log('app excuchando en el puerto 8080');
});


