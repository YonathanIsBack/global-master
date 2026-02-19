import RouteUtil from '../util/RouteUtil.js';

const fixedAssetRoute = (controllers) => {
  const { fixedAssetController } = controllers;
  const router = RouteUtil.createStandardRoute(fixedAssetController);
  router.post('/count_all', fixedAssetController.count);
  router.post('/get_all_data_fixed_asset_ajax', fixedAssetController.getAll);
  router.post('/get_all_data_api', fixedAssetController.getAllDataAPI);
  router.post('/get_data_api', fixedAssetController.getAllDataAPI);

  return router;
};
const fixedAssetCategoryRoute = (controllers) => {
  const { fixedAssetCategoryController } = controllers;
  const router = RouteUtil.createStandardRoute(fixedAssetCategoryController);
  router.post('/count_all', fixedAssetCategoryController.count);
  router.post('/get_all_data_fixed_asset_category_ajax', fixedAssetCategoryController.getAll);
  router.post('/get_all_data_api', fixedAssetCategoryController.getAllDataAPI);
  router.post('/get_data_api', fixedAssetCategoryController.getAllDataAPI);

  return router;
};
const fixedAssetGroupRoute = (controllers) => {
  const { fixedAssetGroupController } = controllers;
  const router = RouteUtil.createStandardRoute(fixedAssetGroupController);
  router.post('/count_all', fixedAssetGroupController.count);
  router.post('/get_all_data_fixed_asset_group_ajax', fixedAssetGroupController.getAll);
  router.post('/get_all_data_api', fixedAssetGroupController.getAllDataAPI);
  router.post('/get_data_api', fixedAssetGroupController.getAllDataAPI);

  return router;
};
const fixedDepreciationRoute = (controllers) => RouteUtil.createStandardRoute(controllers.fixedDepreciationController);

export { fixedAssetCategoryRoute, fixedAssetGroupRoute, fixedAssetRoute, fixedDepreciationRoute };
