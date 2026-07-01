import createStandardRoute from './createStandardRoute.js';

const golonganRoute = (controllers) => {
  const { msCk6GolonganController } = controllers;
  const router = createStandardRoute(msCk6GolonganController);

  router.post('/count_all', msCk6GolonganController.count);
  router.post('/get_all_data_golongan_ajax', msCk6GolonganController.getAll);
  router.post('/get_all_data_api', msCk6GolonganController.getAllDataAPI);

  return router;
};

export default golonganRoute;
