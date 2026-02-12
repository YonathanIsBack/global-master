import RouteUtil from '../util/RouteUtil.js';

const labelRoute = (controllers) => {
  const { labelController } = controllers;
  const router = RouteUtil.createStandardRoute(labelController);

  router.post('/count_all', labelController.count);
  router.post('/get_all_data_label_ajax', labelController.getAll);
  router.post('/get_all_data_api', labelController.getAllDataAPI);

  return router;
};
const labelSettinganPrintRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.labelSettinganPrintController);

export { labelRoute, labelSettinganPrintRoute };
