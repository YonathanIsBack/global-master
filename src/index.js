import express from 'express';
import { createServer } from 'node:http';
import initControllers from './configs/initControllers.js';
import initServices from './configs/initServices.js';
import Websocket from './configs/Websocket.js';
import route from './routes/indexRoute.js';

const app = express();

const server = createServer(app);
Websocket.init(server);

app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true, parameterLimit: 999999999 }));
app.use(express.static('public'));
app.locals.services = initServices();
app.locals.controllers = initControllers(app.locals.services);
route(app);

export default server;
