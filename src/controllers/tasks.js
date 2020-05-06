const Tasks = require('../models/tasks');

exports.tasks = (req, res) => {
  Tasks.tasks( (err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.send(docs);
  })
};

exports.addTask = (req, res) => {
  const task = req.body.task;

  Tasks.addTask(task, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    res.send("Successful")
  })
};