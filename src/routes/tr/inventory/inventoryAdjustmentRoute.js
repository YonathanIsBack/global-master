import { Router } from 'express';
import RouteUtil from '../../../util/RouteUtil.js';
import { validate } from 'express-validation';
import apiValidator from '../../../util/apiValidator.js';
import Endpoint from '../../../constants/Endpoint.js';

const inventoryAdjustmentRoute = (controllers) => {
  const { inventoryAdjustmentController } = controllers;

  const router = Router();
  router.post(Endpoint.SAVE, validate(apiValidator(inventoryAdjustmentController.service.model)), inventoryAdjustmentController.create);
  router.post(Endpoint.CHANGE_STATUS, validate(apiValidator(inventoryAdjustmentController.service.model)), inventoryAdjustmentController.changeStatus);
  router.post(
    Endpoint.CHANGE_STATUS_REQUEST,
    validate(apiValidator(inventoryAdjustmentController.service.model)),
    inventoryAdjustmentController.changeStatusRequest
  );

  return router;
};

export default inventoryAdjustmentRoute;
