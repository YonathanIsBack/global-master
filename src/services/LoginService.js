import 'dotenv/config';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
import Constant from '../constants/Constant.js';
import UserAlreadyExistException from '../exception/UserAlreadyExistException.js';
import UserNotValidException from '../exception/UserNotValidException.js';
import StandardService from './StandardService.js';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';

class LoginService extends StandardService {
  constructor(apiAuthModel) {
    super(apiAuthModel);
  }

  async register(user) {
    return DatabaseConnectionSingleton.getConnection().transaction(async (transaction) => {
      await this.#checkDuplicateUser(user, { transaction });

      return await this.insert(
        {
          apiUsername: user.username,
          apiPassword: user.password,
          isactive: true
        },
        transaction
      ).then(async (value) => {
        const { apiAuthId, apiUsername, apiPassword } = value.dataValues;
        const fixUser = { username: apiUsername, password: apiPassword };
        this.#hashPassword(fixUser, apiAuthId);

        const { dataValues: updatedUser } = await this.update(
          {
            apiAuthId,
            apiUsername,
            apiPassword: fixUser.password
          },
          transaction
        );

        return updatedUser;
      });
    });
  }

  async #checkDuplicateUser(user, option) {
    const foundUser = await this.model.findOne({
      where: {
        apiUsername: user.username
      },
      transaction: option.transaction
    });

    if (foundUser != null) {
      throw new UserAlreadyExistException();
    }
  }

  #hashPassword(user, salt = Constant.EMPTY_STRING) {
    user.password = crypto
      .createHash(Constant.Algorthim, process.env.SECRET_KEY)
      .update(user.username + user.password + process.env.API_SECRET + salt)
      .digest(Constant.hex);
  }

  async login(user) {
    const isAuthenticated = await this.#authenticated(user);
    if (!isAuthenticated) {
      throw new UserNotValidException();
    }

    this.#assignJWTToken(user);

    return { username: user.username, token: user.token };
  }

  #assignJWTToken(user) {
    user.token = this.#generateJWTToken(user);
  }

  async #authenticated(user) {
    const foundUser = await this.model.findOne({ where: { apiUsername: user.username } });
    if (foundUser == null) {
      return false;
    }

    this.#hashPassword(user, foundUser.dataValues.apiAuthId);
    if (foundUser.dataValues.apiPassword !== user.password) {
      return false;
    }

    return true;
  }

  #generateJWTToken(user) {
    return jwt.sign(
      {
        user_id: user.userId
      },
      process.env.API_SECRET,
      { expiresIn: Constant.JwtExpiry, algorithm: Constant.JwtAlgorithm }
    );
  }
}

export default LoginService;
