import createStandardRoute from './createStandardRoute.js';

const trSalesmanTargetRoute = (controllers) => createStandardRoute(controllers.trSalesmanTargetController);
const trSalesmanTargetDtRoute = (controllers) => createStandardRoute(controllers.trSalesmanTargetDtController);

export { trSalesmanTargetDtRoute, trSalesmanTargetRoute };

