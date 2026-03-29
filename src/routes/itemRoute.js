import RouteUtil from '../util/RouteUtil.js';

const itemRoute = (controllers) => {
  const { itemController } = controllers;
  const router = RouteUtil.createStandardRoute(itemController);

  router.post('/count_all', itemController.count);
  router.post('/get_all_data_item_ajax', itemController.getAll);
  router.post('/get_all_data_api', itemController.getAllDataAPI);
  router.post("/get_data_api", itemController.getDataApi);

  return router;
};
const itemBuyingRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.itemBuyingController);
const itemCategoryRoute = (controllers) => {
  const { itemCategoryController } = controllers;
  const router = RouteUtil.createStandardRoute(itemCategoryController);

  router.post('/count_all', itemCategoryController.count);
  router.post('/get_all_data_category_ajax', itemCategoryController.getAll);
  router.post('/get_all_data_api', itemCategoryController.getAllDataAPI);

  return router;
};
const itemComboRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.itemComboController);
const itemImgRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemImgController);
const itemLabelRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.itemLabelController);
const itemLabelDetailRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.itemLabelDetailController);
const itemPriceRoute = (controllers) =>
  RouteUtil.createStandardRoute(controllers.itemPriceController);

const itemSubcategoryRoute = (controllers) => {
  const { itemSubcategoryController } = controllers;
  const router = RouteUtil.createStandardRoute(itemSubcategoryController);

  router.post('/count_all', itemSubcategoryController.count);
  router.post('/get_all_data_sub_category_ajax', itemSubcategoryController.getAll);
  router.post('/get_all_data_api', itemSubcategoryController.getAllDataAPI);

  return router;
};

const itemTypeRoute = (controllers) => {
  const { itemTypeController } = controllers;
  const router = RouteUtil.createStandardRoute(itemTypeController);

  router.post('/count_all', itemTypeController.count);
  router.post('/get_all_data_type_ajax', itemTypeController.getAll);
  router.post('/get_all_data_api', itemTypeController.getAllDataAPI);

  return router;
};
const itemUomRoute = (controllers) => {
  const { itemUomController } = controllers;
  const router = RouteUtil.createStandardRoute(itemUomController);

  router.post('/count_all', itemUomController.count);
  router.post('/get_all_data_unit_ajax', itemUomController.getAll);
  router.post('/get_all_data_api', itemUomController.getAllDataAPI);

  return router;
};

export {
  itemBuyingRoute,
  itemCategoryRoute,
  itemComboRoute,
  itemImgRoute,
  itemLabelDetailRoute,
  itemLabelRoute,
  itemPriceRoute,
  itemRoute,
  itemSubcategoryRoute,
  itemTypeRoute,
  itemUomRoute
};
