import { Server } from 'socket.io';
import LoggerUtilSingleton from '../util/LoggerUtils.js';
import Constant from '../constants/Constant.js';
import LogEvent from '../constants/LogEvent.js';

class Websocket {
  static socket;

  static activeUsers = [];

  #io;

  constructor(server) {
    this.#io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    });

    this.#io.on('connection', (socket) => {
      const { username } = socket.handshake.query;
      LoggerUtilSingleton.info(LogEvent.WEBSOCKET, { event_type: 'Connected', username, timestamp: new Date() });

      socket.conn.on('close', (reason) => {
        LoggerUtilSingleton.info(LogEvent.WEBSOCKET, { event_type: 'Disconnected', username, timestamp: new Date(), reason });
      });

      socket.on('ping', (payload) => {
        const { username } = JSON.parse(payload);

        const updatedActiveUser = Websocket.activeUsers.filter(activeUser => activeUser.username !== username);
        updatedActiveUser.push({ username, timestamp: new Date() });
        Websocket.activeUsers = updatedActiveUser;

        // this.filterOfflineUser();

        this.#io.emit('ping', { active_users: Websocket.activeUsers })
      });

      socket.on('active-users', (payload) => {
        const { username, action } = payload;
        if(action === "DELETE") {
            Websocket.activeUsers = Websocket.activeUsers.filter(user => user.username !== username);
            return;   
        }
      })
    });
    
    this.#io.engine.on('connection_error', (err) => {
      const { code, message, context } = err;
      LoggerUtilSingleton.info(LogEvent.WEBSOCKET, { event_type: 'Websocket Error', code, message, context });
    });
  }

  get io() {
    return this.#io;
  }

  emit(event, message) {
    return this.#io.emit(event, message);
  }

  filterOfflineUser() {
    Websocket.activeUsers = Websocket.activeUsers.filter(user => {
      const timesDifference = Math.abs(new Date() - new Date(user.timestamp));
      const daysDifference = Math.floor(timesDifference / (1000 * 60 * 60 *24));

      return daysDifference < 3;
    });
  }

  static init(server) {
    if (Websocket.socket == null) {
      Websocket.socket = new Websocket(server);
    }

    return Websocket.socket;
  }

  static get socket() {
    return Websocket.socket;
  }
}

export default Websocket;
