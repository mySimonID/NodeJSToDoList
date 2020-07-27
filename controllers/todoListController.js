/*
 * todoListController.js
 * Interface to the ToDoListServer
 * 
 * 
 * get('/')              - return all todo items
 * post('/new')          - add a single todo to the DB
 * post('/delete/:id'    - Delete an item from the DB
 * post('/save/:id'      - Save (update) an existing item to the DB
 */

const axios = require('axios');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app, serverURL) {

  // Return all todos
  //
  app.get('/', (req, res) => {

    axios.get(serverURL)
      .then(response => {
        res.render('todolist', { todos: response.data });
      })
      .catch(err => res.render('error', { errorMessage: err.message }));
    //
  });

  // New ToDo
  //
  app.post('/new', urlencodedParser, (req, res) => {
    // console.log("Posting/new", req.body);

    axios.post(serverURL + '/new', req.body)
      .then(response => {
        res.redirect('/');
      }).catch(err => res.render('error', { errorMessage: err.message }))
  });

  //Delete Todo
  //
  app.get('/delete/:id', urlencodedParser, (req, res) => {
    // console.log("Deleting", req.params.id);

    //
    // Pass the id of the todo to the server for deletion
    // then redirect the user to the root page
    //

    axios.post(serverURL + '/delete/' + req.params.id, req.body)
      .then(response => {
        res.redirect('/');
      }).catch(err => res.render('error', { errorMessage: err.message }));

  });

  // Save existing ToDo
  //
  app.post('/save/:id', urlencodedParser, (req, res) => {
    // console.log("SAVE:", req.params.id, req.body.Text);

    //
    // Create a temporary todo (so that is matchws the todo schem on the server)
    // then pass to the server.
    //

    var todo = {
      _id: req.params.id,
      Text: req.body.Text
    }

    axios.post(serverURL + '/save/' + req.params.id, todo)
      .then(response => {
        res.redirect('/');
      }).catch(err => res.render('error', { errorMessage: err.message }));

  });
}