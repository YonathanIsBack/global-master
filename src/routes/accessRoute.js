import RouteUtil from '../util/RouteUtil.js';

const accessRoute = (controllers) => RouteUtil.createStandardRoute(controllers.accessController);

export default accessRoute;
