const db = require('../db');
// collection names
const TASKS = 'tasks';


exports.tasks = (cb) => {
  db.get().collection(TASKS).find().toArray( (err, docs) => cb(err, docs) )
};