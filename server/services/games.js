import { MongoClient } from "mongodb";
import dbConfig from "../config/database";

export const getGames = (filters = {}) => new Promise((resolve, reject) => {
    try {
        MongoClient.connect(dbConfig.url, (err, db) => {
            if(err)
                throw err;
            let dbo = db.db(dbConfig.database);
            dbo.collection("games").find().toArray((err, results) => {
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

export const insertGames = (data) => new Promise((resolve, reject) => {
    try {
        MongoClient.connect(dbConfig.url, (err, db) => {
            if(err)
                throw err;
            let dbo = db.db(dbConfig.database);
            dbo.collection("games").insertOne(data, (err, result) => {
                if(err)
                    throw err;
                let newGame = { _id: result.insertedId, ...data};
                resolve(newGame);
            })
        })

    } catch (e) {
        reject(e);
    }
})
  