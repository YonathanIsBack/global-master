import RouteUtil from '../util/RouteUtil.js';

const salesmanRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesmanController);
const salesmanCommissionRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesmanCommissionController);
const salesmanTargetRoute = (controllers) => RouteUtil.createStandardRoute(controllers.salesmanTargetController);

export { salesmanCommissionRoute, salesmanRoute, salesmanTargetRoute };

