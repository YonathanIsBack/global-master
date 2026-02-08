import RouteUtil from '../../util/RouteUtil.js';

const deferralJurnalRoute = (controllers) => RouteUtil.createTransactionRoute(controllers.deferralController);

export default deferralJurnalRoute;
