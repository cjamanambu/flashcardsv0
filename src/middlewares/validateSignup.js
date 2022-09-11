import signUpSchema from '../schemas/signUp.schema';
import validationErrorHelpers from '../helpers/validationErrorHelpers';

const validateSignup = (req, res, next) => {
  const validation = signUpSchema.validate(req.body);
  if (validation.error) {
    const message = validationErrorHelpers(validation.error);
    return res.status(400).send({ message });
  }
  next();
};

export default validateSignup;
