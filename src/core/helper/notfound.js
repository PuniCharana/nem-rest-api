const {
  STATUS_CODE
} = require('../constants');

class ItemNotFound extends Error {
  constructor(message) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = STATUS_CODE.NOT_FOUND;
  }
}
module.exports = ItemNotFound;