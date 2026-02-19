import RouteUtil from '../util/RouteUtil.js';

const customerRoute = (controllers) => {
  const { customerController } = controllers;
  const router = RouteUtil.createStandardRoute(customerController);

  router.post('/count_all', customerController.count);
  router.post('/get_all_data_customer_individu_ajax', customerController.getAll);
  router.post('/get_all_data_customer_company_ajax', customerController.getAll);
  router.post('/get_all_data_api', customerController.getAllDataAPI);
  router.post('/get_data_api', customerController.getAllDataAPI);

  return router;
};
const customerBillingRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerBillingController);
const customerCartRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerCartController);
const customerCodeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerCodeController);
const customerContactRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerContactController);
const customerDeliveryRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerDeliveryController);
const customerDocumentRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerDocumentController);
const customerGroupRoute = (controllers) => {
  const { customerGroupController } = controllers;
  const router = RouteUtil.createStandardRoute(customerGroupController);

  router.post('/count_all', customerGroupController.count);
  router.post('/get_all_data_customer_group_ajax', customerGroupController.getAll);
  router.post('/get_all_data_api', customerGroupController.getAllDataAPI);
  router.post('/get_data_api', customerGroupController.getAllDataAPI);

  return router;
};
const customerImgRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerImgController);
const customerRegionRoute = (controllers) => {
  const { customerRegionController } = controllers;
  const router = RouteUtil.createStandardRoute(customerRegionController);
  router.post('/count_all', customerRegionController.count);
  router.post('/get_all_data_customer_region_ajax', customerRegionController.getAll);
  router.post('/get_all_data_api', customerRegionController.getAllDataAPI);
  router.post('/get_data_api', customerRegionController.getAllDataAPI);
  
  return router;
};
const customerSalesRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerSalesController);
const customerSegmentationRoute = (controllers) => {
  const { customerSegmentationController } = controllers;
  const router = RouteUtil.createStandardRoute(customerSegmentationController);
  router.post('/count_all', customerSegmentationController.count);
  router.post('/get_all_data_customer_segmentation_ajax', customerSegmentationController.getAll);
  router.post('/get_all_data_api', customerSegmentationController.getAllDataAPI);
  router.post('/get_data_api', customerSegmentationController.getAllDataAPI);

  return router;
};
const customerSubSegmentationRoute = (controllers) => {
  const { customerSubSegmentationController } = controllers;
  const router = RouteUtil.createStandardRoute(customerSubSegmentationController);
  router.post('/count_all', customerSubSegmentationController.count);
  router.post('/get_all_data_customer_segmentation_ajax', customerSubSegmentationController.getAll);
  router.post('/get_all_data_api', customerSubSegmentationController.getAllDataAPI);
  router.post('/get_data_api', customerSubSegmentationController.getAllDataAPI);

  return router;
};
const customerTaxRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerTaxController);
const customerTypeRoute = (controllers) => {
  const { customerTypeController } = controllers;
  const router = RouteUtil.createStandardRoute(customerTypeController);
  router.post('/count_all', customerTypeController.count);
  router.post('/get_all_data_customer_type_ajax', customerTypeController.getAll);
  router.post('/get_all_data_api', customerTypeController.getAllDataAPI);
  router.post('/get_data_api', customerTypeController.getAllDataAPI);

  return router;
};

export {
  customerBillingRoute,
  customerCartRoute,
  customerCodeRoute,
  customerContactRoute,
  customerDeliveryRoute,
  customerDocumentRoute,
  customerGroupRoute,
  customerImgRoute,
  customerRegionRoute,
  customerRoute,
  customerSalesRoute,
  customerSegmentationRoute,
  customerSubSegmentationRoute,
  customerTaxRoute,
  customerTypeRoute
};
