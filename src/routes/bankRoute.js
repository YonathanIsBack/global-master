import createStandardRoute from './createStandardRoute.js';

const bankRoute = (controllers) => createStandardRoute(controllers.bankController);

export default bankRoute;
