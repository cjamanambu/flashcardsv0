import * as Joi from 'joi';

export default Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
});
