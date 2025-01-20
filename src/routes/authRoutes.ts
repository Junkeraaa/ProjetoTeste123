import { Router } from 'express';
import auth from '../controller/auth';


const router = Router();

router.get('/fernando', auth.printName);


export default router;
