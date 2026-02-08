import RouteUtil from '../util/RouteUtil.js';

const supplierRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierController);
const supplierBankRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierBankController);
const supplierBrandRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierBrandController);
const supplierContactRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierContactController);
const supplierGroupRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierGroupController);
const supplierPaymentRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierPaymentController);
const supplierPurchaseRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierPurchaseController);
const supplierRegionRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierRegionController);
const supplierSegmentationRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierSegmentationController);
const supplierTaxRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierTaxController);
const supplierTypeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.supplierTypeController);

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

