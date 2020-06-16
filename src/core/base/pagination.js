const Joi = require('@hapi/joi');
const {
  PAGINATION
} = require('../constants');

const basePagination = {
  limit: Joi.number().integer().min(PAGINATION.MIN_LIMIT).max(PAGINATION.MAX_LIMIT).default(PAGINATION.LIMIT),
  offset: Joi.number().integer().min(PAGINATION.MIN_OFFSET).default(PAGINATION.OFFSET),
};

module.exports = basePagination;