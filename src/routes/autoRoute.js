import RouteUtil from '../util/RouteUtil.js';

const autoCodeRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.autoCodeController);
const autoCodeCountRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.autoCodeCountController);
const autoJurnalRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.autoJurnalController);

export { autoCodeCountRoute, autoCodeRoute, autoJurnalRoute };

