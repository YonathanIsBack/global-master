import { Router } from 'express';
import Endpoint from '../constants/Endpoint.js';
import { validate } from 'express-validation';
import apiValidator from '../util/apiValidator.js';

const createStandardRoute = (controller) => {
  const router = Router();
  const { model } = controller.service;
  const isdelExist = Object.keys(model.getAttributes()).includes('isdel');

  router.post(Endpoint.SAVE, validate(apiValidator(controller.service.model)), controller.create);
  if (isdelExist) {
    router.post(Endpoint.DELETE, controller.delete);
    router.post(Endpoint.RESTORE, controller.restore);
  }

  return router;
};

export default createStandardRoute;
