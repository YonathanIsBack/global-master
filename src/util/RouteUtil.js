import { Router } from 'express';
import { validate } from 'express-validation';
import apiValidator from './apiValidator.js';
import Endpoint from '../constants/Endpoint.js';

class RouteUtil {
  static createStandardRoute(controller) {
    const router = Router();
    const { model } = controller.service;
    const isdelExist = Object.keys(model.getAttributes()).includes('isdel');

    router.post(Endpoint.SAVE, validate(apiValidator(controller.service.model)), controller.create);
    if (isdelExist) {
      router.post(Endpoint.DELETE, controller.delete);
      router.post(Endpoint.RESTORE, controller.restore);
    }

    return router;
  }

  static createTransactionRoute(controller) {
    const router = Router();
    router.post(Endpoint.SAVE, validate(apiValidator(controller.service.model)), controller.create);
    router.post(Endpoint.ADD_PROCESS, validate(apiValidator(controller.service.model)), controller.create);
    router.post(Endpoint.EDIT_PROCESS, validate(apiValidator(controller.service.model)), controller.create);
    router.post(Endpoint.CHANGE_STATUS, validate(apiValidator(controller.service.model)), controller.changeStatus);
    router.post(Endpoint.CHANGE_STATUS_REQUEST, validate(apiValidator(controller.service.model)), controller.changeStatusRequest);

    return router;
  }
}

export default RouteUtil;
