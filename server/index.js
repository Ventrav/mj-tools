import express from 'express'
import { Router } from 'express';
import { MongoClient } from 'mongodb';
import dbConfig from './config/database'

const app = express();
const router = Router();

app.use(router);

module.exports=  {
    path: '/api',
    handler: app,
};  