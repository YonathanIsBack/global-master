import RouteUtil from '../util/RouteUtil.js';

const transCodeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.transCodeController);
const transCodeGroupRoute = (controllers) => RouteUtil.createStandardRoute(controllers.transCodeGroupController);
const transactionCodeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.transactionCodeController);
const noTransactionRouter = (controllers) => RouteUtil.createStandardRoute(controllers.noTransactionController);

export { noTransactionRouter, transCodeGroupRoute, transCodeRoute, transactionCodeRoute };

