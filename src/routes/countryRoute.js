import createStandardRoute from './createStandardRoute.js';

const countryRoute = (controllers) => createStandardRoute(controllers.countryController);
const countryCodeRoute = (controllers) => createStandardRoute(controllers.countryCodeController);

export { countryCodeRoute, countryRoute };

