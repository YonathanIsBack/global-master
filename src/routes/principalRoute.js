import createStandardRoute from './createStandardRoute.js';

const principalRoute = (controllers) => {
  const { principalController } = controllers;
  const router = createStandardRoute(principalController);

  router.post('/count_all', principalController.count);
  router.post('/get_all_data_principal_ajax', principalController.getAll);
  router.post('/get_all_data_api', principalController.getAllDataAPI);

  return router;
};

export default principalRoute;
