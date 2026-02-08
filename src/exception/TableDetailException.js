import { StatusCodes } from 'http-status-codes';

class TableDetailException extends Error {
  #statusCode;
  constructor(model, validationError) {
    super(`Detail Table ${model.tableName} Error: ${validationError.message}`);
    this.name = 'TableDetailException';
    this.#statusCode = StatusCodes.BAD_REQUEST;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export default TableDetailException;
