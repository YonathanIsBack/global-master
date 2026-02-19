import RouteUtil from '../util/RouteUtil.js';

const salesmanRoute = (controllers) => {
  const { salesmanController } = controllers;
  const router = RouteUtil.createStandardRoute(salesmanController);
  router.post('/count_all', salesmanController.count);
  router.post('/get_all_data_salesman_ajax', salesmanController.getAll);
  router.post('/get_all_data_api', salesmanController.getAllDataAPI);
  router.post('/get_data_api', salesmanController.getAllDataAPI);

  return router;
};
const salesmanCommissionRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesmanCommissionController);
const salesmanTargetRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesmanTargetController);

export { salesmanCommissionRoute, salesmanRoute, salesmanTargetRoute };
