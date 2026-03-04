import RouteUtil from '../util/RouteUtil.js';

const supplierRoute = (controllers) => {
  const { supplierController } = controllers;
  const router = RouteUtil.createStandardRoute(supplierController);

  router.post('/count_all', supplierController.count);
  router.post('/get_all_data_supplier_ajax', supplierController.getAll);
  router.post('/get_all_data_api', supplierController.getAllDataAPI);
  router.post('/get_data_api', supplierController.getDataApi);

  return router;
};
const supplierBankRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierBankController);
const supplierBrandRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierBrandController);
const supplierContactRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierContactController);
const supplierGroupRoute = (controllers) => {
  const { supplierGroupController } = controllers;
  const router = RouteUtil.createStandardRoute(supplierGroupController);

  router.post('/count_all', supplierGroupController.count);
  router.post('/get_all_data_supplier_group_ajax', supplierGroupController.getAll);
  router.post('/get_all_data_api', supplierGroupController.getAllDataAPI);

  return router;
};
const supplierPaymentRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierPaymentController);
const supplierPurchaseRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierPurchaseController);
const supplierRegionRoute = (controllers) => {
  const { supplierRegionController } = controllers;
  const router = RouteUtil.createStandardRoute(supplierRegionController);

  router.post('/count_all', supplierRegionController.count);
  router.post('/get_all_data_supplier_region_ajax', supplierRegionController.getAll);
  router.post('/get_all_data_api', supplierRegionController.getAllDataAPI);

  return router;
};
const supplierSegmentationRoute = (controllers) => {
  const { supplierSegmentationController } = controllers;
  const router = RouteUtil.createStandardRoute(supplierSegmentationController);

  router.post('/count_all', supplierSegmentationController.count);
  router.post('/get_all_data_supplier_segmentation_ajax', supplierSegmentationController.getAll);
  router.post('/get_all_data_api', supplierSegmentationController.getAllDataAPI);

  return router;
};
const supplierTaxRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierTaxController);
const supplierTypeRoute = (controllers) => {
  const { supplierTypeController } = controllers;
  const router = RouteUtil.createStandardRoute(supplierTypeController);

  router.post('/count_all', supplierTypeController.count);
  router.post('/get_all_data_type_ajax', supplierTypeController.getAll);
  router.post('/get_all_data_api', supplierTypeController.getAllDataAPI);

  return router;
};

export {
  supplierBankRoute,
  supplierBrandRoute,
  supplierContactRoute,
  supplierGroupRoute,
  supplierPaymentRoute,
  supplierPurchaseRoute,
  supplierRegionRoute,
  supplierRoute,
  supplierSegmentationRoute,
  supplierTaxRoute,
  supplierTypeRoute
};
