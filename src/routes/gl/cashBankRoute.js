import RouteUtil from '../../util/RouteUtil.js';

const cashBankRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.cashBankController);

export default cashBankRoute;
