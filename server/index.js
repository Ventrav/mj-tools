import express from 'express'
import { Router } from 'express';

const app = express();
const router = Router();

app.use(router);

router.get('/test', (req, res) => {
    console.log("Je suis passé ici")
    res.json({
        test: "toto",
        test2: "titi"
    })
})

module.exports=  {
    path: '/api',
    handler: app,
};  