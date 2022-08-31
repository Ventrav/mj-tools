import { MongoClient, ObjectId } from "mongodb";
import dbConfig from "../config/database";

export const getCharacterSheets = (filters = {}) => new Promise((resolve, reject) => {
    try {
        MongoClient.connect(dbConfig.url, (err, db) => {
            if(err)
                throw err;
            let dbo = db.db(dbConfig.database);
            dbo.collection("character-sheets").find().toArray((err, results) => {
                if(err)
                    throw err;
                db.close();
                resolve(results);
            })
        })        
    } catch (e) {
      reject(e);
    }
});

export const insertCharacterSheet = (data) => new Promise((resolve, reject) => {
    data = {sections: [],...data};
    try {
        MongoClient.connect(dbConfig.url, (err, db) => {
            if(err)
                throw err;
            let dbo = db.db(dbConfig.database);
            dbo.collection("character-sheets").insertOne(data, (err, result) => {
                if(err)
                    throw err;
                let newCharacterSheet = { _id: result.insertedId, ...data};
                resolve(newCharacterSheet);
            })
        })

    } catch (e) {
        reject(e);
    }
})

export const setCharacterSheet = (data) => new Promise((resolve, reject) => {
    try {
        MongoClient.connect(dbConfig.url, (err, db) => {
            if(err)
                throw err;
            console.table(data);
            let dbo = db.db(dbConfig.database);
            let id = data._id;
            let filter = {_id: ObjectId(id)};
            delete data._id;
            let values = { $set: data}
            dbo.collection('character-sheets').updateOne(filter, values, (err, res) => {
                if(err)
                    throw err;
                resolve({...data, _id: id});
            });
        })
    } catch (e) {
        reject(e);
    }
})
  