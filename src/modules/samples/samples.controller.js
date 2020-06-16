const {
  ItemNotFound
} = require('../../core/helper');
const Sample = require('./samples.model');
const {
  sampleListSchema
} = require('./samples.schema');
const {
  STATUS_CODE
} = require('../../core/constants');

/**
 * GET: Get samples
 */
exports.getSamples = async (req, res, next) => {
  try {
    const params = await sampleListSchema.validateAsync(req.query);
    const [count, items] = await Sample().list(params);
    return res.json({
      count,
      items
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET: Get sample by ID
 */
exports.getSample = async (req, res, next) => {
  try {
    const {
      sample_id: sampleId
    } = req.params;
    const projection = '_id name count created updated';
    const sample = await Sample.findById(sampleId, projection);
    if (!sample) throw new ItemNotFound(`Cannot find sample with id ${sampleId}`);
    return res.json({
      data: sample,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE: Delete sample by ID
 */
exports.deleteSample = async (req, res, next) => {
  try {
    await Sample.findByIdAndDelete(req.params.sample_id);
    // Respond with success regardless if artist exist or not
    return res.status(STATUS_CODE.ACCEPTED).send({
      message: 'Deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST: Add new sample
 */
exports.addSample = async (req, res, next) => {
  try {
    const newSample = new Sample(req.body);
    await newSample.joiValidate(req.body);
    // Save new artist & return saved artist
    const sample = await newSample.save();
    return res.status(STATUS_CODE.CREATED).json({
      data: sample,
    });
  } catch (error) {
    next(error);
  }
};