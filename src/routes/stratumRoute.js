import { Router } from 'express';
import RouteUtil from '../util/RouteUtil.js';
import Endpoint from '../constants/Endpoint.js';
import { validate } from 'express-validation';
import apiValidator from '../util/apiValidator.js';

const stratumRoute = (controllers) => {
    const { stratumController } = controllers;
    const router = Router();
    const { model } = stratumController.service;
    const isdelExist = Object.keys(model.getAttributes()).includes('isdel');

    router.post(Endpoint.SAVE, validate(apiValidator(stratumController.service.model)), stratumController.create);
    router.post("/count_all", stratumController.count);
    router.post("/get_all_data_stratum_ajax", stratumController.getAll);
    router.post("/get_all_data_api", stratumController.getAllDataAPI);
    if (isdelExist) {
        router.post(Endpoint.DELETE, stratumController.delete);
        router.post(Endpoint.RESTORE, stratumController.restore);
    }

    return router;
}

export default stratumRoute;
