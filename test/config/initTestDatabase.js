import DatabaseConnectionSingleton from '../../src/configs/DatabaseConnection.js';

const initTestDatabase = async () => {
  const conn = DatabaseConnectionSingleton.getConnection();
  await conn.sync({ force: true });
};

export default initTestDatabase;
