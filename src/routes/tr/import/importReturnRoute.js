import RouteUtil from '../../../util/RouteUtil.js';

const importReturnRoute = (controllers) =>
  RouteUtil.createTransactionRoute(controllers.importReturnController);

export default importReturnRoute;
