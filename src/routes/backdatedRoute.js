import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';
import RouteUtil from '../util/RouteUtil.js';

const backdatedRoute = (controllers) => {
  const router = Router();
  const { backdatedController } = controllers;
  router.post(Endpoint.SAVE, validate(apiValidator(backdatedController.service.model)), backdatedController.create);
  router.post(Endpoint.UPDATE_STATUS, validate(apiValidator(backdatedController.service.model)), backdatedController.create);
  router.post(Endpoint.RESTORE, validate(apiValidator(backdatedController.service.model)), backdatedController.create);
  return router;
};

const backdateLogsdRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.backdatedLogsController);
const backdatedUserRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.backdatedUserController);

export { backdatedRoute, backdatedUserRoute, backdateLogsdRoute };

