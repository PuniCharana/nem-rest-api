const Joi = require('@hapi/joi');

const validation = {
  created: Joi.date().iso().default(() => new Date().toISOString()),
  updated: Joi.date().iso().default(() => new Date().toISOString()),
};

module.exports = validation;