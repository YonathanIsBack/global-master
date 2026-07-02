import RouteUtil from '../util/RouteUtil.js';

const cityRoute = (controllers) => {
  const { cityController } = controllers;
  const router = RouteUtil.createStandardRoute(cityController);

  router.post('/count_all', cityController.count);
  router.post('/get_all_data_city_ajax', cityController.getAll);
  router.post('/get_all_data_api', cityController.getAllDataAPI);

  return router;
};

export default cityRoute;
