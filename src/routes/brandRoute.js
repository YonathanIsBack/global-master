import createStandardRoute from './createStandardRoute.js';

const brandRoute = (controllers) => {
  const { brandController } = controllers;
  const router = createStandardRoute(brandController);

  router.post('/count_all', brandController.count);
  router.post('/get_all_data_brand_ajax', brandController.getAll);
  router.post('/get_all_data_api', brandController.getAllDataAPI);

  return router;
};

export default brandRoute;
