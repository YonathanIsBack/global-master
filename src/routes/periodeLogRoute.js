import RouteUtil from '../util/RouteUtil.js';
import createStandardRoute from './createStandardRoute.js';

const periodeLogRoute = (controllers) => RouteUtil.createStandardRoute(controllers.periodeLogController);

export default periodeLogRoute;
