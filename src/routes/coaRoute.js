import createStandardRoute from './createStandardRoute.js';

const coaRoute = (controllers) => createStandardRoute(controllers.coaController);
const coaBankRoute = (controllers) => createStandardRoute(controllers.coaBankController);
const coaGroupRoute = (controllers) => createStandardRoute(controllers.coaController);
const coaSubGroupRoute = (controllers) => createStandardRoute(controllers.coaController);
const coaTypeRoute = (controllers) => createStandardRoute(controllers.coaController);

export { coaBankRoute, coaGroupRoute, coaRoute, coaSubGroupRoute, coaTypeRoute };
