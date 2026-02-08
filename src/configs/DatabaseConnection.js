import { Sequelize } from 'sequelize';
import getDatabaseConfig from './databaseConfig.js';
import Constant from '../constants/Constant.js';

class DatabaseConnection {
  #connection;

  construtor() {
    this.getConnection();
  }

  getConnection() {
    if (this.#connection === null || this.#connection === undefined) {
      this.#initConnection();
    }

    return this.#connection;
  }

  #initConnection() {
    // const sequelize = new Sequelize('sqlite::memory:', {
    //   logging: console.log
    // });
    // this.#connection = sequelize;
    // return;
    if (process.env.NODE_ENV === 'test') {
      const sequelize = new Sequelize('sqlite::memory:', {
        logging: false,
        // timezone: '+07:00',
        dialectOptions: {
          dateStrings: true,
          typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME') {
              return field.string()
            }
            return next()
          },
        },
      });
      this.#connection = sequelize;
      return;
    }

    const { databaseUrl, databaseName, databaseUsername, databasePassword, dialect } = getDatabaseConfig();

    const sequelize = new Sequelize(databaseName, databaseUsername, databasePassword, {
      host: databaseUrl,
      dialect: dialect,
      logging: false,
      dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) { // for reading from database
          if (field.type === 'DATETIME') {
            return field.string()
          }
          return next()
        },
      },
      timezone: Constant.DATABASE_TIMEZONE
      // logging: (str) => {
      //   console.log(str);
      // }
    });

    this.#connection = sequelize;
  }
}

const DatabaseConnectionSingleton = Object.freeze(new DatabaseConnection());

export default DatabaseConnectionSingleton;
