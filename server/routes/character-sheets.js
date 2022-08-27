import { Router } from "express";
import { 
    get, insert
} from "../controllers/character-sheets";

const router = Router();

router.get('/character-sheets', get);
router.post('/character-sheets', insert);

export default router;