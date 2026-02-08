import { Router } from "express";

const monitorApiRoute = (controllers) => {
  const { monitorApiController } = controllers;
  const router = new Router();

  router.get('/monitor', monitorApiController.getLog);
  router.get('/v1/health-check', monitorApiController.healthCheck);

  return router;
};

export default monitorApiRoute;