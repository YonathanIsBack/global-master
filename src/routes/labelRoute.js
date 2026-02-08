import RouteUtil from '../util/RouteUtil.js';

const labelRoute = (controllers) => RouteUtil.createStandardRoute(controllers.labelController);
const labelSettinganPrintRoute = (controllers) => RouteUtil.createStandardRoute(controllers.labelSettinganPrintController);

export { labelRoute, labelSettinganPrintRoute };

