import createStandardRoute from './createStandardRoute.js';

const warehouseRoute = (controllers) => createStandardRoute(controllers.warehouseController);
const warehouseLevelRoute = (controllers) => createStandardRoute(controllers.warehouseLevelController);

export { warehouseLevelRoute, warehouseRoute };
