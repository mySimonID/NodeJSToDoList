const axios = require('axios');
const bodyParser = require('body-parser');

const baseURL = 'http://localhost:49160/';

const urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function (app) {

  //Get all todos
  app.get('/', (req, res) => {

    axios.get(baseURL)
      .then(response => {
        res.render('todolist', { todos: response.data });
      })
      .catch(err => res.render('error', { errorMessage: err.message }));
    //
  });

  // New ToDo
  app.post('/new', urlencodedParser, (req, res) => {
    console.log("Posting", req.body);

    axios.post(baseURL + 'new', req.body)
      .then(response => {
        res.redirect('/');
        //console.log(response.data);
      }).catch(err => res.render('error', { errorMessage: err.message }))
  });

  //Delete Todo
  app.get('/delete/:id', urlencodedParser, (req, res) => {
    console.log("Deleting", req.params.id);

    //Logic to delete the item

    //axios.post(baseURL + 'delete/'+ req.params.name.replace(/\-/g, " "),req.body)
    axios.post(baseURL + 'delete/' + req.params.id, req.body)
      .then(response => {
        res.redirect('/');
      }).catch(err => res.render('error', { errorMessage: err.message }));

  });

  //Edit ToDo
  //Reshow List of ToDo items
  app.get('/edit/:id', urlencodedParser, (req, res) => {

    axios.get(baseURL)
      .then(response => {
        res.render('editToDo', { todos: response.data, current: req.params.id });
      })
      .catch(err => res.render('error', { errorMessage: err.message }));
    //
  });

  //
  app.post('/save/:id', urlencodedParser, (req, res) => {

    console.log("SAVE:", req.params.id, req.body.Text);

    var todo = {
      _id: req.params.id,
      Text: req.body.Text
    }

    axios.post(baseURL + 'save/' + req.params.id, todo)
      .then(response => {
        res.redirect('/');
      }).catch(err => res.render('error', { errorMessage: err.message }));

  });

  //
  app.get('/cancelEdit', (req, res) => {
    res.redirect('/');
  });

  app.get('/example', (req, res) => {
    res.render('example')
  })

}