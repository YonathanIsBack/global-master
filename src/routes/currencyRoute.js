import { Router } from 'express';
import { validate } from 'express-validation';
import Endpoint from '../constants/Endpoint.js';
import apiValidator from '../util/apiValidator.js';

const currencyRoute = (controllers) => {
    const { currencyController } = controllers;
    const router = Router();
    const { model } = currencyController.service;
    const isdelExist = Object.keys(model.getAttributes()).includes('isdel');

    router.post(Endpoint.SAVE, validate(apiValidator(currencyController.service.model)), currencyController.create);
    router.post("/count_all_currency", currencyController.count);
    router.post("/get_all_data_currency_ajax", currencyController.getAll);
    router.post("/get_all_data_api", currencyController.getAllDataAPI);
    
    if (isdelExist) {
        router.post(Endpoint.DELETE, currencyController.delete);
        router.post(Endpoint.RESTORE, currencyController.restore);
    }

    return router;
};

export default currencyRoute;
