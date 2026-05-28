import RouteUtil from '../../../util/RouteUtil.js';

const purchaseQuoteRoute = (controllers) => {
  const { purchaseQuoteController } = controllers;
  const router = RouteUtil.createTransactionRoute(purchaseQuoteController);

  return router;
};

export default purchaseQuoteRoute;
