const express = require('express');
const db = require('./db');
const Tasks = require('./controllers/tasks');

// mongo
const MONGO_URL = "mongodb://localhost:27017";

const app = express();

// routes
app.get('/tasks', Tasks.tasks);


db.connect( MONGO_URL, (err) => {
  if (err) {
    return console.log(err);
  }

  app.listen(3637, () => {
    console.log('Server started...')
  });
});