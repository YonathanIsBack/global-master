import { StatusCodes } from 'http-status-codes';

class SessionNotValidException extends Error {
  #statusCode;
  constructor() {
    super(`Session not valid. Please check your JWT Token`);
    this.name = 'SessionNotValidException';
    this.#statusCode = StatusCodes.UNAUTHORIZED;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

export default SessionNotValidException;
