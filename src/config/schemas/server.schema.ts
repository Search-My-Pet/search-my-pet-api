import * as Joi from 'joi';

export const ServerSchema = Joi.object({
  SERVER_HOST: Joi.string().domain().allow('localhost').default('local'),
  SERVER_PORT: Joi.number().port().default(80),
});
