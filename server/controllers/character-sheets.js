import {
    getCharacterSheets, insertCharacterSheet, setCharacterSheet
} from '../services/character-sheets';

export async function get(req, res) {
    try {
        const results = await getCharacterSheets();
        res.send(results);
    } catch (e) {
        res.status(500).send(e)
    }
}

export async function insert(req, res) {
    try {
        let data = req.body.data;
        const result = await insertCharacterSheet(data);
        res.send(result);
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
}

export async function set(req, res) {
    console.table(req.body.data);
    try {
        let data = req.body.data;
        const result = await setCharacterSheet(data);
        res.status(201).send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    } 
}