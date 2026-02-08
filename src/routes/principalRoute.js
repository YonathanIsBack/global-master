import RouteUtil from '../util/RouteUtil.js';

const principalRoute = (controllers) => RouteUtil.createStandardRoute(controllers.principalController);

export default principalRoute;
