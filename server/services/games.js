import { MongoClient } from 'mongodb';
import dbConfig from '../config/database';

export const getGames = (filters = {}) => new Promise((resolve, reject) => {
  try {
    MongoClient.connect(dbConfig.url, (err, db) => {
      if (err) { throw err; }
      const dbo = db.db(dbConfig.database);
      dbo.collection('games').find(filters).toArray((errFind, results) => {
        if (errFind) { throw err; }
        db.close();
        resolve(results);
      });
    });
  } catch (e) {
    reject(e);
  }
});

export const insertGames = (data) => new Promise((resolve, reject) => {
  try {
    MongoClient.connect(dbConfig.url, (err, db) => {
      if (err) { throw err; }
      const dbo = db.db(dbConfig.database);
      dbo.collection('games').insertOne(data, (errInsert, result) => {
        if (errInsert) { throw err; }
        const newGame = { _id: result.insertedId, ...data };
        resolve(newGame);
      });
    });
  } catch (e) {
    reject(e);
  }
});
