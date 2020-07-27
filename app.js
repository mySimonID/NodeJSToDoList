const express = require('express');
const todoListController = require('./controllers/todoListController');
const appRoutesController = require('./controllers/appRoutesController')

const {serverURL} = require('./controllers/constants')

const app = express();


//Set the View engine
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

// The controllers will control the routes
todoListController(app, serverURL);
appRoutesController(app, serverURL);

const PORT=3000;
const HOST='localhost';

app.listen(PORT, HOST);
console.log(`running todoList on http://${HOST}:${PORT}`);
