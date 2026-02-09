import express from 'express';
import { createServer } from 'node:https';
import initControllers from './configs/initControllers.js';
import initServices from './configs/initServices.js';
import Websocket from './configs/Websocket.js';
import route from './routes/indexRoute.js';

const app = express();

const indexHttps = createServer(app);
Websocket.init(indexHttps);

app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true, parameterLimit: 5000 }));
app.use(express.static('public'));
app.locals.services = initServices();
app.locals.controllers = initControllers(app.locals.services);
route(app);

export default indexHttps;
