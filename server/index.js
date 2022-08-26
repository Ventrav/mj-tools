import express from 'express'
import { Router } from 'express';
import { MongoClient } from 'mongodb';
import dbConfig from './config/database'
import bodyParser from 'body-parser';

const app = express();
const router = Router();
app.use(bodyParser.json());

router.get('/games', (req, res) => {
    MongoClient.connect(dbConfig.url, (err, db) => {
        let dbo = db.db(dbConfig.database);
        dbo.collection("games").find().toArray((err, result) => {
            db.close();
            console.log(result);
            res.send(result);
        })
    })
});
router.post('/games', (req, res) => {
    console.log(req.body.data.name)
    MongoClient.connect(dbConfig.url, (err, db) => {
        let dbo = db.db(dbConfig.database);
        let data = {
            name: req.body.data.name
        };
        dbo.collection("games").insertOne(data, (err, result) => {
            console.log("Game inserted");
            const newGame = {...req.body.data, _id: result.insertedId};
            res.send(newGame)
        })
    })
})

app.use(router);

module.exports=  {
    path: '/api',
    handler: app,
};  