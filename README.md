# NodeJSToDoList
A simple ToDo list created using nodejs. 

## Overview

The code provides a simple ToDo list to show a list of ToDo items, Add a new ToDo item and then either update or delete the item.

The REST server [ToDoListServer](https://github.com/mySimonID/TodoListServer/blob/master/README.md) is used to manage the interactions with the mongoDB which holds the ToDo items.

## Using

This project assumes that the [ToDoListServer](https://github.com/mySimonID/TodoListServer/blob/master/README.md) has been set-up on a Docker instance.

The file todoListController.js in the Controllers folder has a line: const baseURL = 'http://localhost:49160/';

This refers to the instance of Docker that has been set-up on port 49160. If you specify a different port number or deploy the ToDoList Server to somewhere different, then change this reference.

Once this project is downloaded to your machine, run the following commands to install the node packages and start the project:

- npm i
- node app.js

## Future enhancements
- [ ] Implement authentication
- [ ] Implement auto-synch

## License
[MIT](https://choosealicense.com/licenses/mit/)





