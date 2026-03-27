import RouteUtil from '../util/RouteUtil.js';

const autoCodeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.autoCodeController);
const autoCodeCountRoute = (controllers) => RouteUtil.createStandardRoute(controllers.autoCodeCountController);
const autoJurnalRoute = (controllers) => {
  const { autoJurnalController } = controllers;
  const router = RouteUtil.createStandardRoute(autoJurnalController);
  router.post('/count_all', autoJurnalController.count);
  router.post('/get_all_data_auto_jurnal_ajax', autoJurnalController.getAll);
  router.post('/get_all_data_api', autoJurnalController.getAllDataAPI);
  router.post('/get_data_api', autoJurnalController.getDataApi);
  return router;
};

export { autoCodeCountRoute, autoCodeRoute, autoJurnalRoute };
