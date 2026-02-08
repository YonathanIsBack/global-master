import RouteUtil from '../../util/RouteUtil.js';

const coretaxCategoryRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxCategoryController);
const coretaxCountryRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxCountryController);
const coretaxFacilityRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxFacilityController);
const coretaxInfoRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxInfoController);
const coretaxJenisPembeliRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxJenisPembeliController);
const coretaxTaxRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxTaxController);
const coretaxTransactionCodeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxTransactionCodeController);
const coretaxTypeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxTypeController);
const coretaxUomRoute = (controllers) => RouteUtil.createStandardRoute(controllers.coretaxUomController);

export {
  coretaxCategoryRoute,
  coretaxCountryRoute,
  coretaxFacilityRoute,
  coretaxInfoRoute,
  coretaxJenisPembeliRoute,
  coretaxTaxRoute,
  coretaxTransactionCodeRoute,
  coretaxTypeRoute,
  coretaxUomRoute,
};
