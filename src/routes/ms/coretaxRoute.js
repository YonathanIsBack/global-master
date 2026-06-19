import RouteUtil from '../../util/RouteUtil.js';

const coretaxCategoryRoute = (controllers) => {
  const { coretaxCategoryController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxCategoryController);
  router.post('/count_all', coretaxCategoryController.count);
  router.post('/get_all_data_coretax_category_ajax', coretaxCategoryController.getAll);
  router.post('/get_all_data_api', coretaxCategoryController.getAllDataAPI);

  return router;
};
const coretaxCountryRoute = (controllers) => {
  const { coretaxCountryController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxCountryController);
  router.post('/count_all', coretaxCountryController.count);
  router.post('/get_all_data_coretax_country_ajax', coretaxCountryController.getAll);
  router.post('/get_all_data_api', coretaxCountryController.getAllDataAPI);

  return router;
};
const coretaxFacilityRoute = (controllers) => {
  const { coretaxFacilityController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxFacilityController);
  router.post('/count_all', coretaxFacilityController.count);
  router.post('/get_all_data_coretax_facility_ajax', coretaxFacilityController.getAll);
  router.post('/get_all_data_api', coretaxFacilityController.getAllDataAPI);

  return router;
};
const coretaxInfoRoute = (controllers) => {
  const { coretaxInfoController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxInfoController);
  router.post('/count_all', coretaxInfoController.count);
  router.post('/get_all_data_coretax_info_ajax', coretaxInfoController.getAll);
  router.post('/get_all_data_api', coretaxInfoController.getAllDataAPI);

  return router;
};
const coretaxJenisPembeliRoute = (controllers) => {
  const { coretaxJenisPembeliController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxJenisPembeliController);
  router.post('/count_all', coretaxJenisPembeliController.count);
  router.post('/get_all_data_coretax_jenis_pembeli_ajax', coretaxJenisPembeliController.getAll);
  router.post('/get_all_data_api', coretaxJenisPembeliController.getAllDataAPI);

  return router;
};
const coretaxTaxRoute = (controllers) => {
  const { coretaxTaxController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxTaxController);
  router.post('/count_all', coretaxTaxController.count);
  router.post('/get_all_data_coretax_tax_ajax', coretaxTaxController.getAll);
  router.post('/get_all_data_api', coretaxTaxController.getAllDataAPI);

  return router;
};
const coretaxTransactionCodeRoute = (controllers) => {
  const { coretaxTransactionCodeController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxTransactionCodeController);
  router.post('/count_all', coretaxTransactionCodeController.count);
  router.post('/get_all_data_coretax_transaction_code_ajax', coretaxTransactionCodeController.getAll);
  router.post('/get_all_data_api', coretaxTransactionCodeController.getAllDataAPI);

  return router;
};
const coretaxTypeRoute = (controllers) => {
  const { coretaxTypeController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxTypeController);
  router.post('/count_all', coretaxTypeController.count);
  router.post('/get_all_data_coretax_type_ajax', coretaxTypeController.getAll);
  router.post('/get_all_data_api', coretaxTypeController.getAllDataAPI);

  return router;
};
const coretaxUomRoute = (controllers) => {
  const { coretaxUomController } = controllers;
  const router = RouteUtil.createStandardRoute(coretaxUomController);
  router.post('/count_all', coretaxUomController.count);
  router.post('/get_all_data_coretax_uom_ajax', coretaxUomController.getAll);
  router.post('/get_all_data_api', coretaxUomController.getAllDataAPI);

  return router;
};

export {
  coretaxCategoryRoute,
  coretaxCountryRoute,
  coretaxFacilityRoute,
  coretaxInfoRoute,
  coretaxJenisPembeliRoute,
  coretaxTaxRoute,
  coretaxTransactionCodeRoute,
  coretaxTypeRoute,
  coretaxUomRoute
};
