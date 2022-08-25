import express from 'express'
import { Router } from 'express';

const app = express();
const router = Router();

router.get('/test', (req, res) => {
    return {
        test: "toto",
        test2: "titi"
    }
})

export default {
    path: '/api',
    handler: app,
  };  