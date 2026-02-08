import { StatusCodes } from 'http-status-codes';

class UserAlreadyExistException extends Error {
  #statusCode;
  constructor() {
    super(`User you want to register already exist`);
    this.name = 'UserAlreadyExistException';
    this.#statusCode = StatusCodes.BAD_REQUEST;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export default UserAlreadyExistException;
