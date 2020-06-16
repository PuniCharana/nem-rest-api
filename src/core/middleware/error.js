const {
  STATUS_CODE
} = require('../constants');

/**
 * Handle user input validation failures
 * @param {Object} err Error object
 * @param {Object} res Response object
 */
function handleValidationError(err, res) {
  const messages = 'ValidationError';
  // TODO
  // Handle error
  res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).json({
    error: err,
    messages
  });
}

/**
 * Handle type error
 * @param {Object} err Error object
 * @param {Object} res Response object
 */
function handleTypeError(err, res) {
  // TODO
  // Handle error
  res.status(err.statusCode).json({
    error: err,
    message: err.message
  });
}

/**
 * Handle Type casting error
 * @param {Object} err Error object
 * @param {Object} res Response object
 */
function handleCastError(err, res) {
  // TODO
  // Handle error
  res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).json({
    error: err,
    message: err.message
  });
}

/**
 * Handle Item not found error
 * @param {Object} err Error object
 * @param {Object} res Response object
 */
function handleItemNotFoundError(err, res) {
  // TODO
  // Handle error
  res.status(err.statusCode).json({
    error: err,
    message: err.message
  });
}

function handleError(err, res) {
  // TODO
  // Handle error
  res.status(err.statusCode).json({
    error: err,
    message: err.message
  });
}

exports.errorHandler = (err, _req, res, _next) => {
  if (!err.statusCode) err.statusCode = 500;
  console.log(err.name);
  console.log(err);
  switch (err.name) {
    case 'ValidationError':
      return handleValidationError(err, res);
    case 'TypeError':
      return handleTypeError(err, res);
    case 'CastError':
      return handleCastError(err, res);
    case 'ItemNotFound':
      return handleItemNotFoundError(err, res);
    case 'ReferenceError':
      return handleCastError(err, res);
    case 'Error':
      return handleError(err, res);
    default:
      // TODO
      break;
  }
  res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
    status: 'error'
  });
};


/**
 * Catch 404 and forward to error handler
 */
exports.notFound = (req, res, _next) => {
  console.log(req.url);
  res.status(STATUS_CODE.NOT_FOUND).json({
    message: 'Cannot ' + req.method + ' ' + req.url,
    error: 'Not Found'
  });
};