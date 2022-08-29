import { Router } from "express";
import { 
    get, insert, set
} from "../controllers/character-sheets";

const router = Router();

router.get('/character-sheets', get);
router.post('/character-sheets', insert);
router.patch('/character-sheets/:characterSheetId', set);

export default router;