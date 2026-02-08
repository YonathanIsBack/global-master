import { NotificationDetailDto, NotificationDto } from '../dto/NotificationDto.js';
import StandardController from './StandardController.js';

class NotificationController extends StandardController {
  constructor(notificationService) {
    super(notificationService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const notificationDto = new NotificationDto(body);

    return await super.create(request, response, notificationDto);
  }

  async delete(request, response) {
    const { body } = request;
    const notificationDto = new NotificationDto(body);

    return await super.delete(request, response, notificationDto);
  }

  async restore(request, response) {
    const { body } = request;
    const notificationDto = new NotificationDto(body);

    return await super.restore(request, response, notificationDto);
  }
}

class NotificationDetailController extends StandardController {
  constructor(notificationDetailService) {
    super(notificationDetailService);
    this.create = this.create.bind(this);
    this.restore = this.restore.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(request, response) {
    const { body } = request;
    const notificationDetailDto = new NotificationDetailDto(body);

    return await super.create(request, response, notificationDetailDto);
  }

  async delete(request, response) {
    const { body } = request;
    const notificationDetailDto = new NotificationDetailDto(body);

    return await super.delete(request, response, notificationDetailDto);
  }

  async restore(request, response) {
    const { body } = request;
    const notificationDetailDto = new NotificationDetailDto(body);

    return await super.restore(request, response, notificationDetailDto);
  }
}

export { NotificationController, NotificationDetailController };
