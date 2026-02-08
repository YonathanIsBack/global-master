import { StatusCodes } from 'http-status-codes';

class DataNotFoundException extends Error {
  #statusCode;
  constructor(modelName) {
    super(`${modelName} not found or exist`);
    this.name = 'DataNotFoundException';
    this.#statusCode = StatusCodes.NOT_FOUND;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export default DataNotFoundException;
