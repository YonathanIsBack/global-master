import { Router } from "express";
import { validate } from "express-validation";
import Endpoint from "../constants/Endpoint.js";
import apiValidator from "../util/apiValidator.js";

const periodeRoute = (controllers) => {

  const router = Router();
  const { periodeController } = controllers;

  router.post(Endpoint.SAVE, validate(apiValidator(periodeController.service.model)), periodeController.create);
  router.post(Endpoint.DELETE, periodeController.delete);
  router.post(Endpoint.RESTORE, periodeController.restore);
  return router;
}

export default periodeRoute;
