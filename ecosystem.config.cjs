require('dotenv/config');

module.exports = {
  apps: [
    {
      name: process.env.APP_NAME == null ? 'PANTJQ' : process.env.APP_NAME,
      script: './src/server.js',
      error_file: './pm2/err.log',
      out_file: './pm2/out.log',
      env_production: {
        NODE_ENV: 'production'
      },
      env_development: {
        NODE_ENV: 'development'
      },
      watch: true,
      watch_delay: 5000,
      ignore_watch: ['node_modules', 'node_modules', 'logs', 'public', 'test', '.git', 'pm2']
    }
  ]
};
