
/*
 * appRoutesController.js
 * Routes used to render different parts of the Application
 * 
 * /edit/:id
 * /cancelEdit
 */

const axios = require('axios');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function (app, serverURL) {

  //Edit ToDo
  //Reshow List of ToDo items in Edit mode
  //
  app.get('/edit/:id', urlencodedParser, (req, res) => {

    //
    // Get the ToDo data from the server and then render the 'editToDo' view.
    //

    axios.get(serverURL)
      .then(response => {
        res.render('editToDo', { todos: response.data, current: req.params.id });
      })
      .catch(err => res.render('error', { errorMessage: err.message }));
    //
  });

  // CancelEdit
  //
  app.get('/cancelEdit', (req, res) => {

    //
    // Just redirect the user to the home page on cancel
    //

    res.redirect('/');
  })
}
