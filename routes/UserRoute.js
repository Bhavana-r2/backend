import express from "express";
import { 
    gethead, 
    addhead ,
    deletehead,
    updatehead,
    
} from "../controllers/UserController.js";

import {
    getlogin
} from "../controllers/UserController2.js"
 
const router = express.Router();

router.get('/heading', gethead);
router.post('/heading', addhead);
router.patch('/heading/:id', updatehead);
router.delete('/heading/:id', deletehead);

router.get('/login', getlogin);

export default router;