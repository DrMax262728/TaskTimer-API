const MongoClient = require('mongodb').MongoClient;

const DB_NAME = 'task-timer-api';

const state = {
  db: null
};

exports.connect = async (url, done) => {
  if (state.db) {
    return done();
  }

  const client = new MongoClient(url, { useUnifiedTopology: true });

  await client.connect( (err) => {
    if (err) {
      return done(err)
    }

    state.db = client.db(DB_NAME);
    done();
  })
};

exports.get = () => state.db;