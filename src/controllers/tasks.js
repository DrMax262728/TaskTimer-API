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