import { Router } from "express";
import Endpoint from "../constants/Endpoint.js";

const importDataRoute = (controllers) => {
  const { importDataController } = controllers
  const router = new Router();
  router.post(Endpoint.EMPTY, importDataController.importData);

  return router
}

export default importDataRoute;