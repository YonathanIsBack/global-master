import RouteUtil from '../util/RouteUtil.js';

const trSafetyStockRoute = (controllers) => {
  const { trSafetyStockController } = controllers;
  const router = RouteUtil.createStandardRoute(trSafetyStockController);

  router.post('/count_all', trSafetyStockController.count);
  router.post('/get_all_data_safety_stock_ajax', trSafetyStockController.getAll);
  router.post('/get_all_data_api', trSafetyStockController.getAllDataAPI);
  router.post('/get_data_api', trSafetyStockController.getDataApi);

  return router;
};

export default trSafetyStockRoute;
