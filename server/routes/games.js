import { Router } from "express";
import { 
    get, insert
} from "../controllers/games";

const router = Router();

router.get('/games', get);
router.post('/games', insert);

export default router;