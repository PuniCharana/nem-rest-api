const mongoose = require('mongoose');
const {
  sampleSchema
} = require('./samples.schema');
const {
  PAGINATION
} = require('../../core/constants');

/**
 * Get sample listing
 * @param {Object} params Query params
 */
sampleSchema.methods.list = (params) => {
  const {
    offset,
    limit
  } = params;
  const query = {};
  const projection = '_id name count created updated';
  const samples = Sample.find(query, projection)
    .skip(limit * (offset - PAGINATION.BASE_INDEX))
    .limit(limit);
  const count = Sample.countDocuments(query);
  return Promise.all([count, samples]);
};

/**
 * Sample model
 */
const Sample = mongoose.model('Sample', sampleSchema);
module.exports = Sample;