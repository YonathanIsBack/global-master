import { Router } from 'express';
import { validate } from 'express-validation';
import apiValidator from '../util/apiValidator.js';
import createStandardRoute from './createStandardRoute.js';
import Endpoint from '../constants/Endpoint.js';

const actionRoute = (controllers) => {
    const router = Router();
    const { actionController } = controllers;

    router.post(Endpoint.SAVE, validate(apiValidator(actionController.service.model)), actionController.create);
    router.post(Endpoint.DELETE, actionController.delete);
    router.post(Endpoint.RESTORE, actionController.restore);
    
    router.post("/count_all", actionController.count);
    router.post("/get_all_data_action_ajax", actionController.getAll);
    router.post("/get_all_data_api", actionController.getAllDataAPI);

    return router;
}
const actionPageRoute = (controllers) => createStandardRoute(controllers.actionPageController);

export { actionPageRoute, actionRoute };

