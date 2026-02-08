import { validate } from 'express-validation';
import Endpoint from '../../../constants/Endpoint.js';
import RouteUtil from '../../../util/RouteUtil.js';
import apiValidator from '../../../util/apiValidator.js';

const stockOpnameRoute = (controllers) => {
  const { stockOpnameController } = controllers;
  const router = RouteUtil.createTransactionRoute(stockOpnameController);

  router.post(Endpoint.OPNAME_PROCESS, validate(apiValidator(stockOpnameController.service.model)), stockOpnameController.opnameProcess);

  return router;
};

export default stockOpnameRoute;
