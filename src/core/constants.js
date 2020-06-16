/**
 * Define all constants
 */
module.exports = {
  DEFAULT_PORT: 3000,
  /** User input validation */
  VALIDATION: {
    MIN: 0,
    MAX: 9,
  },
  /** Pagination */
  PAGINATION: {
    OFFSET: 1,
    MIN_OFFSET: 1,
    LIMIT: 20,
    MIN_LIMIT: 1,
    MAX_LIMIT: 100,
    BASE_INDEX: 1
  },
  /** Response stauts code */
  STATUS_CODE: {
    CREATED: 201,
    ACCEPTED: 202,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500
  }
};