import RouteUtil from '../util/RouteUtil.js';

const stCurrencyRateRoute = (controllers) => {
  const { stCurrencyRateController } = controllers;
  const router = RouteUtil.createStandardRoute(stCurrencyRateController);

  router.post('/count_all', stCurrencyRateController.count);
  router.post('/get_all_data_currency_rate_ajax', stCurrencyRateController.getAll);
  router.post('/get_all_data_api', stCurrencyRateController.getAllDataAPI);
  router.post('/get_data_api', stCurrencyRateController.getDataApi);

  return router;
};

export default stCurrencyRateRoute;
