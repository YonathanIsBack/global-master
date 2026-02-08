import { StatusCodes } from 'http-status-codes';

class JWTException extends Error {
  #statusCode;
  constructor(message) {
    super(`JWT Error: ${message}`);
    this.name = 'JWTException';
    this.#statusCode = StatusCodes.UNAUTHORIZED;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export default JWTException;
