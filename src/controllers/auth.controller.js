import { Op } from 'sequelize';
import model from '../models';
import signUpSchema from '../schemas/signUp.schema';

const { User } = model;

export const signUp = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res
        .status(422)
        .send({ message: 'A user with that email already exists' });
    }
    await User.create({
      name,
      email,
      status: 'inactive',
    });
    return res.status(201).send({ message: 'Account created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message:
        'Could not perform operation at this time, kindly try again later',
    });
  }
};
