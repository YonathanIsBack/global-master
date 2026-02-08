import RouteUtil from '../util/RouteUtil.js';

const taxRoute = (controllers) => RouteUtil.createStandardRoute(controllers.taxController);
const taxFormRoute = (controllers) => RouteUtil.createStandardRoute(controllers.taxFormController);

export { taxFormRoute, taxRoute };

