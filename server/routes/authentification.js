import { Router } from "express";
import { 
    logoutAction,getUser, loginAction
} from "../controllers/authentification";

const router = Router();

router.post('/auth/login', loginAction);
router.post('/auth/logout', logoutAction);
router.get('/auth/user', getUser);

export default router;