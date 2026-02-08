import 'dotenv/config';
import jwt from 'jsonwebtoken';
import JWTException from '../exception/JWTException.js';
import SessionNotValidException from '../exception/SessionNotValidException.js';

const authenticationMiddleware = (unlessPath = []) => {
  return (request, response, next) => {
    const isSkip = unlessPath.some((path) => request.originalUrl.includes(path));
    if (isSkip) {
      return next();
    }

    const bearer = request.get('Authorization');
    if (!bearer) {
      throw new SessionNotValidException();
    }
    const token = bearer.split(' ')[1];

    jwt.verify(token, process.env.API_SECRET, function (err, decoded) {
      if (err) {
        throw new JWTException(err.message);
      }
    });

    next();
  };
};

export default authenticationMiddleware;
