const express = require('express');
const samplesRoutes = require('../../modules/samples/samples.route');
const {
  name,
  description,
  author,
  version,
  license
} = require('../../../package.json');

// Initialization
const router = express.Router();

/**
 * Routes
 * define the home page route
 */
router.get('/', (req, res) => {
  return res.json({
    name,
    description,
    author,
    version,
    license,
    status: true
  });
});
router.use('/samples', samplesRoutes);

module.exports = router;