import {
    getGames, insertGames
} from '../services/games';

export async function get(req, res) {
    try {
        const results = await getGames();
        res.send(results);
    } catch (e) {
        res.status(500).send(e)
    }
}

export async function insert(req, res) {
    try {
        let data = req.body.data;
        const result = await insertGames(data);
        res.send(result);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
}