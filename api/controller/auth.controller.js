import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    console.log (req)
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json('User created successfully!');
    } catch (error) {
        // console.log(error);
      next(error);
    }
  };