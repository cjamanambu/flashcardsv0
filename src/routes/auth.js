import express from 'express';
import { signUp } from '../controllers';
import validateSignup from '../middlewares/validateSignup';

const authRouter = express.Router();

authRouter.post('/signup', validateSignup, signUp);

export default authRouter;
