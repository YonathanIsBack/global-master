import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';
import createStandardRoute from './createStandardRoute.js';

const userAksesCompanyRoute = (controllers) => createStandardRoute(controllers.userAksesCompanyController);

const userRoute = (controllers) => {
  const router = Router();
  const { userController } = controllers;
  router.post(Endpoint.CHANGE_PIN, validate(apiValidator(userController.service.model)), userController.create);
  router.post(Endpoint.CHANGE_PASSWORD, validate(apiValidator(userController.service.model)), userController.create);
  router.post(Endpoint.SAVE, validate(apiValidator(userController.service.model)), userController.create);
  router.post(Endpoint.RESTORE, validate(apiValidator(userController.service.model)), userController.create);
  router.post(Endpoint.DELETE, validate(apiValidator(userController.service.model)), userController.delete);

  router.post(Endpoint.USER_CUSTOMER, validate(apiValidator(userController.service.model)), userController.insertTransaction);
  router.post(Endpoint.USER_SUPPLIER, validate(apiValidator(userController.service.model)), userController.insertTransaction);
  router.post(Endpoint.USER_SALESMAN, validate(apiValidator(userController.service.model)), userController.insertTransaction);
  router.post(Endpoint.USER_TURUNAN, validate(apiValidator(userController.service.model)), userController.insertTransaction);
  router.post(Endpoint.USER_ITEM, validate(apiValidator(userController.service.model)), userController.insertTransaction);


  return router;
};

const userCustomerRoute = (controllers) => {
  const router = Router();
  const { userCustomerController } = controllers;
  router.post(Endpoint.DELETE_CUSTOMER_LIST, userCustomerController.delete);

  return router;
};

const userSupplierRoute = (controllers) => {
  const router = Router();
  const { userSupplierController } = controllers;
  router.post(Endpoint.DELETE_SUPPLIER_LIST, userSupplierController.delete);

  return router;
};

const userSalesmanRoute = (controllers) => {
  const router = Router();
  const { userSalesmanController } = controllers;
  router.post(Endpoint.DELETE_SALESMAN_LIST, userSalesmanController.delete);

  return router;
};

const userTurunanRoute = (controllers) => {
  const router = Router();
  const { userTurunanController } = controllers;
  router.post(Endpoint.DELETE_TURUNAN_LIST, userTurunanController.delete);

  return router;
};

const userItemRoute = (controllers) => {
  const router = Router();
  const { userItemController } = controllers;
  router.post(Endpoint.DELETE_ITEM_LIST, userItemController.delete);

  return router;
};

const userGroupRoute = (controllers) => {
  const router = Router();
  const { userGroupController } = controllers;

  router.post(Endpoint.SAVE, validate(apiValidator(userGroupController.service.model)), userGroupController.create);
  router.post(Endpoint.DELETE, userGroupController.delete);
  router.post(Endpoint.RESTORE, userGroupController.restore);
  return router;
};

const userGroupAccessRoute = (controllers) => createStandardRoute(controllers.userGroupAccessController);
const userGroupCustomerRoute = (controllers) => createStandardRoute(controllers.userGroupCustomerController);
const userOtpRoute = (controllers) => createStandardRoute(controllers.userOtpController);

const userTableViewColumnRoute = (controllers) => createStandardRoute(controllers.userTableViewColumnController);

export {
  userAksesCompanyRoute,
  userCustomerRoute,
  userGroupAccessRoute,
  userGroupCustomerRoute,
  userGroupRoute,
  userItemRoute,
  userOtpRoute,
  userRoute,
  userSalesmanRoute,
  userSupplierRoute,
  userTableViewColumnRoute,
  userTurunanRoute
};
