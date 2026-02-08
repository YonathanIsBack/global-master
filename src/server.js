import server from './index.js';
import indexHttps from './indexHttps.js';
import 'dotenv/config';

const runApplication = async () => {
  const httpPort = process.env.HTTP_PORT == null ? 3000 : process.env.HTTP_PORT;
  const httpsPort = process.env.HTTPS_PORT == null ? 3001 : process.env.HTTPS_PORT;

  server.listen(httpPort, () => {
    console.log('Application is running on port ' + httpPort);
  });

  indexHttps.listen(httpsPort, () => {
    console.log('Https application is running on port ' + httpsPort);
  });
};

runApplication();
