import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';
import RouteUtil from '../util/RouteUtil.js';

const pageMenuRoute = (controllers) => {
  const router = Router();
  const { pageMenuController } = controllers;

  router.post(Endpoint.SAVE, validate(apiValidator(pageMenuController.service.model)), pageMenuController.create);
  router.post(Endpoint.DELETE, pageMenuController.delete);
  router.post(Endpoint.RESTORE, pageMenuController.restore);

  return router;
}

const pageMenuTerbukaRoute = (controllers) => RouteUtil.createStandardRoute(controllers.pageMenuTerbukaController);

export { pageMenuRoute, pageMenuTerbukaRoute };

