import RouteUtil from '../util/RouteUtil.js';

const itemRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemController);
const itemBuyingRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemBuyingController);
const itemCategoryRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemCategoryController);
const itemComboRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemComboController);
const itemImgRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemImgController);
const itemLabelRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemLabelController);
const itemLabelDetailRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemLabelDetailController);
const itemPriceRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemPriceController);
const itemSubcategoryRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemSubcategoryController);
const itemTypeRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemTypeController);
const itemUomRoute = (controllers) => RouteUtil.createStandardRoute(controllers.itemUomController);

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

