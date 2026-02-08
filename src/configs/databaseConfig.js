import 'dotenv/config';

const getDatabaseConfig = () => {
  return {
    databaseUrl: process.env.DATABASE_URL,
    databaseName: process.env.DATABASE_NAME,
    databaseUsername: process.env.DATABASE_USER,
    databasePassword: process.env.DATABASE_PASSWORD,
    dialect: 'mysql'
  };
};

export default getDatabaseConfig;
