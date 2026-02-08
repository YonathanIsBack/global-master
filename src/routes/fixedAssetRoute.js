import RouteUtil from '../util/RouteUtil.js';

const fixedAssetRoute = (controllers) => RouteUtil.createStandardRoute(controllers.fixedAssetController);
const fixedAssetCategoryRoute = (controllers) => RouteUtil.createStandardRoute(controllers.fixedAssetCategoryController);
const fixedAssetGroupRoute = (controllers) => RouteUtil.createStandardRoute(controllers.fixedAssetGroupController);
const fixedDepreciationRoute = (controllers) => RouteUtil.createStandardRoute(controllers.fixedDepreciationController);

export { fixedAssetCategoryRoute, fixedAssetGroupRoute, fixedAssetRoute, fixedDepreciationRoute };

