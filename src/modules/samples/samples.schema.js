const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const {
  baseSchema,
  basePagination
} = require('../../core/base');
const {
  VALIDATION,
} = require('../../core/constants');

const sampleSchema = mongoose.Schema({
  ...baseSchema,
  name: {
    type: String,
    require: true,
  },
  count: {
    type: Number,
    require: true,
  },
});

// https://gist.github.com/stongo/6359042
sampleSchema.methods.joiValidate = (obj) => {
  const schema = Joi.object({
    ...baseSchema,
    name: Joi.string().required(),
    count: Joi.number().min(VALIDATION.MIN).max(VALIDATION.MAX).required(),
  });
  return schema.validateAsync(obj);
};
// Convert _id to id
sampleSchema.method('toJSON', function () {
  // eslint-disable-next-line no-unused-vars
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const sampleListSchema = Joi.object({
  ...basePagination,
});

module.exports = {
  sampleSchema,
  sampleListSchema,
};