import { StatusCodes } from 'http-status-codes';

class TableNotFoundException extends Error {
  #statusCode;
  constructor(tableName) {
    super(`Table detail ${tableName} not found or exist`);
    this.name = 'TableNotFoundException';
    this.#statusCode = StatusCodes.BAD_REQUEST;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export default TableNotFoundException;
