import { Router } from 'express';
import multer from 'multer';
import Endpoint from '../constants/Endpoint.js';
import LoginController from '../controllers/LoginController.js';
import ApiAuth from '../models/ApiAuth.js';
import LoginService from '../services/LoginService.js';
import { Joi, validate } from 'express-validation';

const upload = multer();
const loginService = new LoginService(ApiAuth);
const loginController = new LoginController(loginService);
const router = Router();

const loginRoute = () => {
  router.post(Endpoint.EMPTY, loginController.login);
  router.post(
    Endpoint.REGISTER,
    validate({
      body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        register_authentication_key: Joi.string().required()
      })
    }),
    loginController.register
  );

  return router;
};

export default loginRoute;
