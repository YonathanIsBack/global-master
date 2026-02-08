import { Router } from 'express';
import createStandardRoute from './createStandardRoute.js';
import { validate } from 'express-validation';
import apiValidator from '../util/apiValidator.js';
import Endpoint from '../constants/Endpoint.js';

const transactionRoute = (controllers) => {
  const { transactionController } = controllers;
  const router = Router();

  router.post(Endpoint.SAVE, validate(apiValidator(transactionController.service.model)), transactionController.create);
  router.post(Endpoint.RESTORE, transactionController.restore);

  return router;
}

export default transactionRoute;
