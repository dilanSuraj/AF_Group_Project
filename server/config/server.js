const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true});
const connection = mongoose.connection();

connection.once('open', function () {
    console.log('Mongo DB connection established successfully')
});

app.listen(PORT, function () {
    console.log('Server is listening to the port ',PORT);
});