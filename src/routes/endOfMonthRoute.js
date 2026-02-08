import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';

const endOfMonthRoute = (controllers) => {
  const router = Router();
  const { endOfMonthController } = controllers;
  router.post(Endpoint.SAVE, validate(apiValidator(endOfMonthController.service.model)), endOfMonthController.create);
  router.post(Endpoint.UPDATE_STATUS, validate(apiValidator(endOfMonthController.service.model)), endOfMonthController.create);
  router.post(Endpoint.RESTORE, validate(apiValidator(endOfMonthController.service.model)), endOfMonthController.create);
  return router;
};

export default endOfMonthRoute;
