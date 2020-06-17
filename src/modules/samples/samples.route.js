const router = require('express').Router();
const controller = require('./samples.controller');

router.route('/').post(controller.addSample);
router.route('/').get(controller.getSamples);
router.route('/:sample_id').get(controller.getSample);
router.route('/:sample_id').patch(controller.updateSample);
router.route('/:sample_id').delete(controller.deleteSample);

module.exports = router;