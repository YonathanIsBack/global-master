import 'dotenv/config';
import lodash from 'lodash';
import Constant from '../../constants/Constant.js';
import Endpoint from '../../constants/Endpoint.js';
import routeProps from './routeProps.js';

const getBasePath = {
  [Constant.MASTER]: Endpoint.MASTER,
  [Constant.INVENTORY]: Endpoint.INVENTORY,
  [Constant.SETTING]: Endpoint.SETTING,
  [Constant.SYSTEM]: Endpoint.SYSTEM,
  [Constant.ACCOUNTING]: Endpoint.ACCOUNTING
};

const generateParameters = (model) => {
  const parameters = [];
  const modelAttributes = model.getAttributes();

  for (const key in modelAttributes) {
    if (modelAttributes.hasOwnProperty(key)) {
      parameters.push({
        in: 'formData',
        name: modelAttributes[key].field,
        type: modelAttributes[key].type.key
      });
    }
  }

  return parameters;
};

const generateResponse = (model) => {
  const modelAttributes = model.getAttributes();
  const result = {};

  for (const key in modelAttributes) {
    if (modelAttributes.hasOwnProperty(key)) {
      Object.assign(result, { [lodash.snakeCase(key)]: '' });
    }
  }

  return result;
};

const generateGenericPath = (pathName, model, tags) => {
  const additionalPath = Object.keys(model.getAttributes()).includes('isdel')
    ? {
        [`${getBasePath[tags]}${pathName}/restore`]: {
          post: {
            tags: [`${tags}`, `${model.name}`],
            summary: `Restore ${model.name} to database`,
            ...(process.env.NODE_ENV !== 'production' && {
              description: `This change isdel to 0`
            }),
            parameters: [
              ...model.primaryKeyAttributes.map((primaryKeyAttribute) => ({
                in: 'formData',
                name: lodash.snakeCase(primaryKeyAttribute),
                type: 'INTEGER'
              })),
              {
                in: 'formData',
                name: 'cretime',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'creby',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'modtime',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'modby',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'user_id',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'user_ip',
                type: 'STRING'
              }
            ],
            responses: {
              200: {
                description: 'Successful restore',
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 200
                    },
                    message: {
                      type: 'string',
                      example: Constant.RESTORED
                    },
                    data: {
                      type: 'object',
                      example: {
                        ...generateResponse(model)
                      }
                    }
                  }
                }
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 401
                    },
                    message: {
                      type: 'string',
                      example: 'Session not valid. Please check your JWT Token'
                    }
                  }
                }
              }
            },
            security: [
              {
                Bearer: ['asd']
              }
            ]
          }
        },
        [`${getBasePath[tags]}${pathName}/delete`]: {
          post: {
            tags: [`${tags}`, `${model.name}`],
            summary: `Delete ${model.name} to database`,
            ...(process.env.NODE_ENV !== 'production' && {
              description: `This change isdel to 1`
            }),
            parameters: [
              ...model.primaryKeyAttributes.map((primaryKeyAttribute) => ({
                in: 'formData',
                name: lodash.snakeCase(primaryKeyAttribute),
                type: 'INTEGER'
              })),
              {
                in: 'formData',
                name: 'cretime',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'creby',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'modtime',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'modby',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'user_id',
                type: 'STRING'
              },
              {
                in: 'formData',
                name: 'user_ip',
                type: 'STRING'
              }
            ],
            responses: {
              200: {
                description: 'Successful delete',
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 200
                    },
                    message: {
                      type: 'string',
                      example: Constant.DELETED
                    },
                    data: {
                      type: 'object',
                      example: {
                        ...generateResponse(model)
                      }
                    }
                  }
                }
              },
              401: {
                description: 'Unauthorized',
                schema: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      example: 401
                    },
                    message: {
                      type: 'string',
                      example: 'Session not valid. Please check your JWT Token'
                    }
                  }
                }
              }
            },
            security: [
              {
                Bearer: ['asd']
              }
            ]
          }
        }
      }
    : {};

  return {
    [`${getBasePath[tags]}${pathName}/save`]: {
      post: {
        tags: [`${tags}`, `${model.name}`],
        summary: `Add or update ${model.name} to database`,
        ...(process.env.NODE_ENV !== 'production' && {
          description: `This will save or update data to table ${model.tableName}`
        }),
        parameters: [
          ...generateParameters(model),
          {
            in: 'formData',
            name: 'user_id',
            type: 'STRING'
          },
          {
            in: 'formData',
            name: 'user_ip',
            type: 'STRING'
          }
        ],
        responses: {
          201: {
            description: 'Successful create',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  example: 201
                },
                message: {
                  type: 'string',
                  example: 'CREATED'
                },
                data: {
                  type: 'object',
                  example: {
                    ...generateResponse(model)
                  }
                }
              }
            }
          },
          200: {
            description: 'Successful update',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  example: 200
                },
                message: {
                  type: 'string',
                  example: 'UPDATED'
                },
                data: {
                  type: 'object',
                  example: {
                    ...generateResponse(model)
                  }
                }
              }
            }
          },
          401: {
            description: 'Unauthorized',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  example: 401
                },
                message: {
                  type: 'string',
                  example: 'Session not valid. Please check your JWT Token'
                }
              }
            }
          }
        },
        security: [
          {
            Bearer: ['asd']
          }
        ]
      }
    },
    ...additionalPath
  };
};

const buildAllRoute = () => {
  const result = {};

  // routeProps.map((route) => Object.assign(result, generateGenericPath(route.path, route.dbModel, route.tag)));

  return result;
};

const swaggerProps = {
  definition: {
    info: {
      title: 'API Documentation',
      description: 'This is API Documentation'
      // termsOfService: 'http://swagger.io/terms/'
      //   contact: {
      //     email: 'apiteam@swagger.io'
      //   },
      //   license: {
      //     name: 'Apache 2.0',
      //     url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      //   },
      //   version: '1.0.11'
    },
    host: process.env.API_HOSTNAME,
    // host: 'localhost:3000',
    basePath: process.env.API_BASEPATH,
    schemes: ['http', 'https'],
    // externalDocs: {
    //   description: 'Find out more about Swagger',
    //   url: 'http://swagger.io'
    // },
    // servers: [
    //   {
    //     url: 'http://192.168.1.100/pantjqapi'
    //   }
    // ],
    // tags: [
    //   {
    //     name: 'pet',
    //     description: 'Everything about your Pets',
    //     externalDocs: {
    //       description: 'Find out more',
    //       url: 'http://swagger.io'
    //     }
    //   },
    //   {
    //     name: 'store',
    //     description: 'Access to Petstore orders',
    //     externalDocs: {
    //       description: 'Find out more about our store',
    //       url: 'http://swagger.io'
    //     }
    //   },
    //   {
    //     name: 'user',
    //     description: 'Operations about user'
    //   }
    // ],
    paths: {
      '/auth': {
        post: {
          tags: ['Auth', 'Login'],
          summary: `Login to API. Use this function to get Session Token then add token to authorization`,
          parameters: [
            {
              in: 'formData',
              name: 'username',
              type: 'string'
            },
            {
              in: 'formData',
              name: 'password',
              type: 'string'
            }
          ],
          responses: {
            200: {
              description: 'Successful Login',
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 200
                  },
                  message: {
                    type: 'string',
                    example: 'CREATED'
                  },
                  data: {
                    type: 'object',
                    example: {
                      user: {
                        username: 'administrator',
                        token:
                          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzY1MTgwMDcsImV4cCI6MTczNjUyMTYwN30.XksRbYeJp56PbvrFUfRUhRy7mf8bTdvX-RLta3jh_tc'
                      }
                    }
                  }
                }
              }
            }
          },
          401: {
            description: 'Unauthorized',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  example: 401
                },
                message: {
                  type: 'string',
                  example: 'Session not valid. Please check your JWT Token'
                }
              }
            }
          }
        },
        security: [
          {
            Bearer: []
          }
        ]
      },
      '/auth/register': {
        post: {
          tags: ['Auth', 'Register'],
          summary: `Register to API use this API to register new user using username and passowrd`,
          parameters: [
            {
              in: 'formData',
              name: 'username',
              type: 'string'
            },
            {
              in: 'formData',
              name: 'password',
              type: 'string'
            }
          ],
          responses: {
            200: {
              description: 'Successful Register',
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 201
                  },
                  message: {
                    type: 'string',
                    example: 'REGISTERED'
                  },
                  data: {
                    type: 'object',
                    example: {
                      user: {
                        apiAuthId: 31,
                        apiUsername: 'Administrator',
                        isactive: 1
                      }
                    }
                  }
                }
              }
            }
          },
          401: {
            description: 'Unauthorized',
            schema: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  example: 401
                },
                message: {
                  type: 'string',
                  example: 'Session not valid. Please check your JWT Token'
                }
              }
            }
          }
        },
        security: [
          {
            Bearer: []
          }
        ]
      },
      ...buildAllRoute()
    },
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        authorizationUrl: 'http://192.168.1.100/pantjqapi/login',
        name: 'Authorization',
        in: 'header',
        description: "Enter the token with the `Bearer: ` prefix, e.g. 'Bearer abcde12345'."
      }
    }
  },
  apis: ['./routes/*.js']
};

export default swaggerProps;
