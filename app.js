const express = require('express');
const todoListController = require('./controllers/todoListController');


const app = express();


//Set the View engine
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));

// The Controller will control the routes
todoListController(app);

const PORT=3000;
const HOST='localhost';

app.listen(PORT, HOST);
console.log(`running todoList on http://${HOST}:${PORT}`);
