import createStandardRoute from './createStandardRoute.js';

const trSalesTargetRoute = (controllers) => createStandardRoute(controllers.trSalesTargetController);
const trSalesTargetDtRoute = (controllers) => createStandardRoute(controllers.trSalesTargetDtController);

export { trSalesTargetDtRoute, trSalesTargetRoute };
