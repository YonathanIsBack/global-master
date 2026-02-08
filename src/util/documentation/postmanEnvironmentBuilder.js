import 'dotenv/config';

const postmanEnvironmentBuilder = () => {
  return {
    name: 'Pantjq API',
    values: [
      {
        key: 'url',
        value: `${process.env.API_HOSTNAME}${process.env.API_BASEPATH}`,
        type: 'default',
        enabled: true
      },
      {
        key: 'JWT',
        value: '',
        type: 'secret',
        enabled: true
      }
    ]
  };
};

export default postmanEnvironmentBuilder;
