import RouteUtil from '../util/RouteUtil.js';

const customerRoute = (controllers) => {
  const { customerController } = controllers;
  const router = RouteUtil.createStandardRoute(customerController);

  router.post('/count_all', customerController.count);
  router.post('/get_all_data_customer_individu_ajax', customerController.getAll);
  router.post('/get_all_data_customer_company_ajax', customerController.getAll);
  router.post('/get_all_data_api', customerController.getAllDataAPI);

  return router;
};
const customerBillingRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerBillingController);
const customerCartRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerCartController);
const customerCodeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerCodeController);
const customerContactRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerContactController);
const customerDeliveryRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerDeliveryController);
const customerDocumentRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerDocumentController);
const customerGroupRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerGroupController);
const customerImgRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerImgController);
const customerRegionRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerRegionController);
const customerSalesRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerSalesController);
const customerSegmentationRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerSegmentationController);
const customerTaxRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerTaxController);
const customerTypeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.customerTypeController);

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
  customerTaxRoute,
  customerTypeRoute
};
