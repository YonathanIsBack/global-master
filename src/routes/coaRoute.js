import createStandardRoute from './createStandardRoute.js';

const coaRoute = (controllers) => {
  const { coaController } = controllers;
  const router = createStandardRoute(coaController);
  router.post('/count_all', coaController.count);
  router.post('/get_all_data_coa_ajax', coaController.getAll);
  router.post('/get_all_data_api', coaController.getAllDataAPI);
  router.post('/get_data_api', coaController.getAllDataAPI);

  return router;
};
const coaBankRoute = (controllers) => createStandardRoute(controllers.coaBankController);
const coaGroupRoute = (controllers) => {
  const { coaGroupController } = controllers;
  const router = createStandardRoute(controllers.coaGroupController);
  router.post('/count_all', coaGroupController.count);
  router.post('/get_all_data_coa_group_ajax', coaGroupController.getAll);
  router.post('/get_all_data_api', coaGroupController.getAllDataAPI);
  router.post('/get_data_api', coaGroupController.getAllDataAPI);

  return router;
};
const coaSubGroupRoute = (controllers) => {
  const { coaSubGroupController } = controllers;
  const router = createStandardRoute(coaSubGroupController);
  router.post('/count_all', coaSubGroupController.count);
  router.post('/get_all_data_coa_sub_group_ajax', coaSubGroupController.getAll);
  router.post('/get_all_data_api', coaSubGroupController.getAllDataAPI);
  router.post('/get_data_api', coaSubGroupController.getAllDataAPI);

  return router;
};
const coaTypeRoute = (controllers) => {
  const { coaTypeController } = controllers;
  const router = createStandardRoute(coaTypeController);
  router.post('/count_all', coaTypeController.count);
  router.post('/get_all_data_coa_type_ajax', coaTypeController.getAll);
  router.post('/get_all_data_api', coaTypeController.getAllDataAPI);
  router.post('/get_data_api', coaTypeController.getAllDataAPI);

  return router;
};
const coaSubLedgerRoute = (controllers) => {
  const { coaSubledgerController } = controllers;
  const router = createStandardRoute(coaSubledgerController);
  router.post('/count_all', coaSubledgerController.count);
  router.post('/get_all_data_coa_sub_ledger_ajax', coaSubledgerController.getAll);
  router.post('/get_all_data_api', coaSubledgerController.getAllDataAPI);
  router.post('/get_data_api', coaSubledgerController.getAllDataAPI);

  return router;
};

export { coaBankRoute, coaGroupRoute, coaRoute, coaSubGroupRoute, coaTypeRoute, coaSubLedgerRoute };
