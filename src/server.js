const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const Tasks = require('./controllers/tasks');

// mongo
const MONGO_URL = "mongodb://localhost:27017";

const app = express();

// use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.get('/tasks', Tasks.tasks);
app.post('/tasks', Tasks.addTask);


db.connect( MONGO_URL, (err) => {
  if (err) {
    return console.log(err);
  }

  app.listen(3637, () => {
    console.log('Server started...')
  });
});