import { MongoClient, ObjectId } from 'mongodb';
import dbConfig from '../config/database';

export const getCharacterSheets = (filters = {}) => new Promise((resolve, reject) => {
  try {
    MongoClient.connect(dbConfig.url, (err, db) => {
      if (err) { throw err; }
      const dbo = db.db(dbConfig.database);
      dbo.collection('character-sheets').find(filters).toArray((errFind, results) => {
        if (errFind) { throw err; }
        db.close();
        resolve(results);
      });
    });
  } catch (e) {
    reject(e);
  }
});

export const insertCharacterSheet = (data) => new Promise((resolve, reject) => {
  const insertData = { sections: [], ...data };
  try {
    MongoClient.connect(dbConfig.url, (err, db) => {
      if (err) { throw err; }
      const dbo = db.db(dbConfig.database);
      dbo.collection('character-sheets').insertOne(insertData, (errInsert, result) => {
        if (errInsert) { throw err; }
        const newCharacterSheet = { _id: result.insertedId, ...data };
        resolve(newCharacterSheet);
      });
    });
  } catch (e) {
    reject(e);
  }
});

export const setCharacterSheet = (data) => new Promise((resolve, reject) => {
  try {
    MongoClient.connect(dbConfig.url, (err, db) => {
      if (err) { throw err; }
      console.table(data);
      const dbo = db.db(dbConfig.database);
      const id = data._id;
      const filter = { _id: ObjectId(id) };
      delete data._id;
      const values = { $set: data };
      dbo.collection('character-sheets').updateOne(filter, values, (errUpdate) => {
        if (errUpdate) { throw err; }
        resolve({ ...data, _id: id });
      });
    });
  } catch (e) {
    reject(e);
  }
});
