import createStandardRoute from './createStandardRoute.js';

const warehouseRoute = (controllers) => {
  const { warehouseController } = controllers;
  const router = createStandardRoute(warehouseController);
  router.post('/count_all', warehouseController.count);
  router.post('/get_all_data_warehouse_ajax', warehouseController.getAll);
  router.post('/get_all_data_api', warehouseController.getAllDataAPI);

  return router;
};
const warehouseLevelRoute = (controllers) => createStandardRoute(controllers.warehouseLevelController);

export { warehouseLevelRoute, warehouseRoute };
