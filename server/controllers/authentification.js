import {
    login, insertCharacterSheet, setCharacterSheet
} from '../services/authentification';


export async function loginAction(req,res) {
    try {
        let data = req.body;
        const result = await login(data);
        res.send(result);
    } catch (e) {  
        console.log(e)   
        res.status(500).send(e);
    }
}

export async function logoutAction(req, res) {
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

export async function getUser(req, res) {
    try {
        const results = await getCharacterSheets();
        res.send(results);
    } catch (e) {
        res.status(500).send(e)
    }
}