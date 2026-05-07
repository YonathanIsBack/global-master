import { Router } from 'express';
import RouteUtil from '../util/RouteUtil.js';
import Endpoint from '../constants/Endpoint.js';

const fetchReportRoute = (controllers) => {
  const router = Router();
  const { globalReportController } = controllers;

  router.post(Endpoint.EMPTY, globalReportController.fetchReport);

  return router;
};

export default fetchReportRoute;
