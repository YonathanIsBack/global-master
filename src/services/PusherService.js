import Websocket from '../configs/Websocket.js';
import Constant from '../constants/Constant.js';
import LogEvent from '../constants/LogEvent.js';
import Pusher from '../constants/Pusher.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import StandardService from './StandardService.js';

class PusherService extends StandardService {
  #subscribers;
  constructor(model) {
    super(model);
    this.#subscribers = [];
  }

  registerSubscriber(request, response) {
    const newSubscriber = this.#generateSubscriber(request, response);
    this.#subscribers.push(newSubscriber);

    this.#configClosedConnection(request, response, newSubscriber);
    this.#refreshSubscriber();
  }

  #refreshSubscriber() {
    this.#subscribers.forEach((subscriber) => {
      subscriber.response.write(`refresh: refresh`);
    });
  }

  #configClosedConnection(request, _, subscriber) {
    request.on('close', async () => {
      LoggerUtilSingleton.info(LogEvent.SERVER_SENT_EVENT, { message: `[Pusher Event]: ${subscriber.id} Connection closed` });
      this.#subscribers = this.#subscribers.filter((registeredSubscriber) => registeredSubscriber.id !== subscriber.id);
    });
  }

  #generateSubscriber(request, response) {
    return {
      id: (request.query.username ?? 'unknown') + Date.now(),
      response,
      connectedAt: Date(),
      userIp: request.headers['x-forwarded-for']
    };
  }

  async triggerNotification() {
    this.#subscribers.forEach((subscriber) => subscriber.response.write(`${Pusher.Event.Data}: 'A New transaction!' \n\n`));
    const subscriberCount = (await Websocket.socket.io.fetchSockets()).length;
    Websocket.socket.emit(Pusher.Event.Message, 'New Notification!');

    return { message: `Done! Sent notification to ${subscriberCount} user(s)` };
  }

  async sendMessage(message) {
    const { receivers } = message;

    receivers.forEach(receiver => {
      console.log(receiver);
      Websocket.socket.emit(`chat-${receiver.username}`, message);
    })
  }

  async getNotificationStatus() {
    const sockets = await Websocket.socket.io.fetchSockets();
    const users = sockets.map((socket, index) => ({
      index,
      id: socket.handshake.issued,
      username: socket.handshake.query.username,
      connected_at: socket.handshake.time,
      user_ip: socket.handshake.address
    }));

    return {
      total_user: users.length,
      users
    };
  }
}

export default PusherService;
