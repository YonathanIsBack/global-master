import RouteUtil from '../../../util/RouteUtil.js';

const salesDeliveryNoteRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.salesDeliveryNoteController);
const salesDeliveryFixedRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.salesDeliveryFixedController);

export { salesDeliveryFixedRoute, salesDeliveryNoteRoute };

