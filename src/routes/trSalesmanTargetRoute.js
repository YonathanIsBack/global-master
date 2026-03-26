import RouteUtil from '../util/RouteUtil.js';
import createStandardRoute from './createStandardRoute.js';

const trSalesmanTargetRoute = (controllers) => {
  const { trSalesmanTargetController } = controllers;
  const router = RouteUtil.createStandardRoute(trSalesmanTargetController);

  router.post('/count_all', trSalesmanTargetController.count);
  router.post('/get_all_data_sellingman_target_ajax', trSalesmanTargetController.getAll);
  router.post('/get_all_data_api', trSalesmanTargetController.getAllDataAPI);
  router.post('/get_data_api', trSalesmanTargetController.getDataApi);

  return router;
};
const trSalesmanTargetDtRoute = (controllers) => createStandardRoute(controllers.trSalesmanTargetDtController);

export { trSalesmanTargetDtRoute, trSalesmanTargetRoute };

