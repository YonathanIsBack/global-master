import RouteUtil from '../util/RouteUtil.js';

const notificationRoute = (controllers) => RouteUtil.createStandardRoute(controllers.notificationController);
const notificationDetailRoute = (controllers) => RouteUtil.createStandardRoute(controllers.notificationDetailController);

export { notificationDetailRoute, notificationRoute };

