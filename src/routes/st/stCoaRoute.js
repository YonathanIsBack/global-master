import { validate } from "express-validation";
import RouteUtil from "../../util/RouteUtil.js";
import apiValidator from "../../util/apiValidator.js";
import Endpoint from "../../constants/Endpoint.js";
import { Router } from "express";

const stCoaRoute = (controllers) => {
  const { stCoaController } = controllers;
  const router = RouteUtil.createStandardRoute(stCoaController);

  router.post(Endpoint.ADD_COA_PROCESS, validate(apiValidator(stCoaController.service.model)), stCoaController.create);
  router.post(Endpoint.RESTORE, validate(apiValidator(stCoaController.service.model)), stCoaController.restore);

  return router;
};

const stCoaDtRoute = (controllers) => {
  const { stCoaDtController } = controllers;
  // const router = RouteUtil.createStandardRoute(stCoaDtController);
  const router = new Router();

  router.post(Endpoint.DELETE_COA_LIST, validate(apiValidator(stCoaDtController.service.model)), stCoaDtController.delete);

  return router;
};

export { stCoaRoute, stCoaDtRoute };
