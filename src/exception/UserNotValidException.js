import { StatusCodes } from 'http-status-codes';

class UserNotValidException extends Error {
  #statusCode;
  constructor() {
    super(`User not valid`);
    this.name = 'UserNotValidException';
    this.#statusCode = StatusCodes.UNAUTHORIZED;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export default UserNotValidException;
