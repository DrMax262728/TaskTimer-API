const db = require('../db');
// collection names
const TASKS = 'tasks';


exports.tasks = (cb) => {
  db.get().collection(TASKS).find().toArray( (err, docs) => cb(err, docs) )
};

exports.addTask = (task, cb) => {
  db.get().collection(TASKS).insertOne( task,{},(err) => cb(err) )
}