import express from 'express'
import { Router } from 'express';
import { MongoClient } from 'mongodb';
import dbConfig from './config/database';
import bodyParser from 'body-parser';
import authentificationRouter from './routes/authentification';

const app = express();
const router = Router();

app.use(bodyParser.json());
app.use(authentificationRouter)
app.use(router);

module.exports=  {
    path: '/api',
    handler: app,
};  