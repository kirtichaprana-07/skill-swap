import express from 'express';
import { login, signup } from '../Controllers/Authcontroller.js';
import {loginValidation, signupValidation} from '../Middlewares/AuthValidation.js'
const router = express.Router();


router.post('/signup',signupValidation,signup)

router.post('/login',loginValidation,login)

export default router;