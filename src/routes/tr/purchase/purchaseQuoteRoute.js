import RouteUtil from '../../../util/RouteUtil.js';

const purchaseQuoteRoute = (controllers) => {
  const { purchaseQuoteController } = controllers;
  const router = RouteUtil.createTransactionRoute(purchaseQuoteController);
  router.post('/get_report_js', purchaseQuoteController.getReport);

  return router;
};

export default purchaseQuoteRoute;
