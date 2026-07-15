import { Sequelize } from 'sequelize';
import getDatabaseConfig from './databaseConfig.js';
import Constant from '../constants/Constant.js';
import LoggerUtilSingleton from '../util/LoggerUtils.js';

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
    if (process.env.NODE_ENV === 'test') {
      const sequelize = new Sequelize('sqlite::memory:', {
        logging: false,
        dialectOptions: {
          dateStrings: true,
          typeCast: function (field, next) {
            if (field.type === 'DATETIME') {
              return field.string();
            }
            return next();
          }
        }
      });
      this.#connection = sequelize;
      return;
    }

    const { databaseUrl, databaseName, databaseUsername, databasePassword, dialect } = getDatabaseConfig();

    const sequelize = new Sequelize(databaseName, databaseUsername, databasePassword, {
      host: databaseUrl,
      dialect: dialect,
      logging: true,
      dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) {
          if (field.type === 'DATETIME') {
            return field.string();
          }
          return next();
        }
      },
      timezone: Constant.DATABASE_TIMEZONE
    });
    
    sequelize.afterConnect(async (connection) => {
      try {
        LoggerUtilSingleton.info('SQL', { message: 'Connected to database' });
        console.log('after connect');
        const [rows] = await connection.promise().query('SELECT @@SESSION.sql_mode AS mode');
        let currentMode = rows[0].mode;
        LoggerUtilSingleton.info('SQL', { message: `Current Mode ${currentMode}` });

        let newMode = currentMode.replace('STRICT_TRANS_TABLES', '').replace(/,,+/g, ',').replace(/^,|,$/g, '');

        await connection.promise().query(`SET SESSION sql_mode='${newMode}'`);

        const [newRows] = await connection.promise().query('SELECT @@SESSION.sql_mode AS mode');
        let recentMode = newRows[0].mode;
        LoggerUtilSingleton.info('SQL', { message: `Changed Mode ${recentMode}` });
      } catch (err) {
        LoggerUtilSingleton.error('SQL', err);
      }
    });

    this.#connection = sequelize;
  }
}

const DatabaseConnectionSingleton = Object.freeze(new DatabaseConnection());

export default DatabaseConnectionSingleton;
