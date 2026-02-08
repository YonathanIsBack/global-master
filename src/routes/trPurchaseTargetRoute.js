import createStandardRoute from './createStandardRoute.js';

const trPurchaseTargetRoute = (controllers) => createStandardRoute(controllers.trPurchaseTargetController);
const trPurchaseTargetDetailRoute = (controllers) => createStandardRoute(controllers.trPurchaseTargetDetailController);

export { trPurchaseTargetDetailRoute, trPurchaseTargetRoute };

