import createStandardRoute from './createStandardRoute.js';

const companyRoute = (controllers) => createStandardRoute(controllers.companyController);
const companyBankRoute = (controllers) => createStandardRoute(controllers.companyBankController);

export { companyBankRoute, companyRoute };

