import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import UserNotValidException from '../../src/exception/UserNotValidException.js';
import ApiAuth from '../../src/models/ApiAuth.js';
import LoginService from '../../src/services/LoginService.js';
import initTestDatabase from '../config/initTestDatabase.js';
beforeEach(async () => {
  await initTestDatabase();
});

describe('LoginService', () => {
  describe('login', () => {
    it('should return user information with token when successfuly logged in', async () => {
      const user = {
        username: 'administrator',
        password: 'administrator'
      };
      const expectedResult = {
        username: 'administrator'
      };
      const loginService = new LoginService(ApiAuth);
      await loginService.register(user);

      const actualResult = await loginService.login(user);

      expect(actualResult.username).toEqual(expectedResult.username);
      expect(actualResult.token).not.toBeNull();
      expect(() => {
        jwt.verify(actualResult.token, process.env.API_SECRET);
      }).not.toThrow(JsonWebTokenError);
    });

    it('should throw error when user not valid', async () => {
      const user = {
        username: 'invaliduser',
        password: 'invaliduser'
      };
      const loginService = new LoginService(ApiAuth);

      const actualResult = await expect(async () => {
        await loginService.login(user);
      }).rejects.toThrow(UserNotValidException);
    });
  });
});
