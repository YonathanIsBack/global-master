import RouteUtil from '../util/RouteUtil.js';

const subdistrictRoute = (controllers) => {
  const { subdistrictController } = controllers;
  const router = RouteUtil.createStandardRoute(subdistrictController);

  router.post('/count_all', subdistrictController.count);
  router.post('/get_all_data_subdistrict_ajax', subdistrictController.getAll);
  router.post('/get_all_data_api', subdistrictController.getAllDataAPI);

  return router;
};

export default subdistrictRoute;
