import RouteUtil from '../util/RouteUtil.js';

const districtRoute = (controllers) => {
  const { districtController } = controllers;
  const router = RouteUtil.createStandardRoute(districtController);

  router.post('/count_all', districtController.count);
  router.post('/get_all_data_district_ajax', districtController.getAll);
  router.post('/get_all_data_api', districtController.getAllDataAPI);

  return router;
};

export default districtRoute;
