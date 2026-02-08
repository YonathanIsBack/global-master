import { StatusCodes } from 'http-status-codes';
import StandardController from './StandardController.js';
import buildResponse from '../util/buildResponse.js';
import Constant from '../constants/Constant.js';

class PusherController extends StandardController {
  constructor(pusherService) {
    super(pusherService);
    this.subscribeNotification = this.subscribeNotification.bind(this);
    this.triggerNotification = this.triggerNotification.bind(this);
    this.notificationHealth = this.notificationHealth.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  subscribeNotification(request, response) {
    this.#initConnection(request, response);
    this.service.registerSubscriber(request, response);
  }

  #initConnection(_, response) {
    const headers = {
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache'
    };
    response.writeHead(StatusCodes.OK, headers);
    response.flushHeaders();
  }

  async triggerNotification(_, response) {
    const result = await this.service.triggerNotification();

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, Constant.TRIGGERED_NOTIFICATION, result));
  }

  async sendMessage(request, response) {
    const { body } = request;
    const result = await this.service.sendMessage(body);

    return response.status(StatusCodes.OK).json(buildResponse(StatusCodes.OK, Constant.SEND_CHAT, result));
  }

  async notificationHealth(request, response) {
    const health = await this.service.getNotificationStatus();

    return response.status(StatusCodes.OK).json(health);
  }
}

export default PusherController;
