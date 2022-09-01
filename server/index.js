import express from 'express'
import { Router } from 'express';
import { MongoClient } from 'mongodb';
import dbConfig from './config/database'
import bodyParser from 'body-parser';
import gamesRouter from './routes/games';
import characterSheetsRouter from './routes/character-sheets';

const app = express();
const router = Router();
app.use(bodyParser.json());

app.use(gamesRouter);
app.use(characterSheetsRouter);
app.use(router);

module.exports=  {
    path: '/api',
    handler: app,
};  