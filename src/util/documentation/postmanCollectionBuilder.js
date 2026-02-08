import lodash from 'lodash';
import Endpoint from '../../constants/Endpoint.js';
import routeProps from './routeProps.js';
import Constant from '../../constants/Constant.js';

const getBasePath = {
  [Constant.MASTER]: Endpoint.MASTER,
  [Constant.INVENTORY]: Endpoint.INVENTORY,
  [Constant.SETTING]: Endpoint.SETTING,
  [Constant.SYSTEM]: Endpoint.SYSTEM
};
const buildInfo = (name) => ({
  name,
  schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
});

const createLoginItem = () => {
  return {
    name: 'Login',
    event: [
      {
        listen: 'test',
        script: {
          exec: ['pm.environment.set("JWT", pm.response.json().data.user.token);\r', ''],
          type: 'text/javascript',
          packages: {}
        }
      }
    ],
    request: {
      method: 'POST',
      header: [],
      body: {
        mode: 'formdata',
        formdata: [
          {
            key: 'username',
            value: 'administrator',
            type: 'text'
          },
          {
            key: 'password',
            value: 'administrator',
            type: 'text'
          }
        ]
      },
      url: {
        raw: `{{url}}${Endpoint.LOGIN}`,
        host: ['{{url}}'],
        path: [`${Endpoint.LOGIN}`]
      }
    },
    response: []
  };
};

const createRegisterItem = () => {
  return {
    name: 'Register',
    event: [],
    request: {
      method: 'POST',
      header: [],
      body: {
        mode: 'formdata',
        formdata: [
          {
            key: 'username',
            value: 'administrator',
            type: 'text'
          },
          {
            key: 'password',
            value: 'administrator',
            type: 'text'
          }
        ]
      },
      url: {
        raw: `{{url}}${Endpoint.LOGIN}${Endpoint.REGISTER}`,
        host: ['{{url}}'],
        path: [`${Endpoint.LOGIN}${Endpoint.REGISTER}`]
      }
    },
    response: []
  };
};

const createFormData = (data) => {
  return {
    key: lodash.snakeCase(data),
    value: '',
    type: 'text'
  };
};

const createSaveItem = (model, path, tag) => {
  return {
    name: 'Create',
    request: {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{JWT}}',
          type: 'text'
        }
      ],
      body: {
        mode: 'formdata',
        formdata: [...Object.keys(model.getAttributes()).map((key) => createFormData(key)), createFormData('user_id'), createFormData('user_ip')]
      },
      url: {
        raw: `{{url}}${getBasePath[tag]}${path}/save`,
        host: ['{{url}}'],
        path: [path, 'save']
      }
    }
  };
};
const createDeleteItem = (model, path, tag) => {
  return {
    name: 'Delete',
    request: {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{JWT}}',
          type: 'text'
        }
      ],
      body: {
        mode: 'formdata',
        formdata: [
          ...model.primaryKeyAttributes.map((primaryKeyAttribute) => createFormData(lodash.snakeCase(primaryKeyAttribute))),
          createFormData('creby'),
          createFormData('cretime'),
          createFormData('modby'),
          createFormData('modtime'),
          createFormData('user_id'),
          createFormData('user_ip')
        ]
      },
      url: {
        raw: `{{url}}${getBasePath[tag]}${path}/delete`,
        host: ['{{url}}'],
        path: [path, 'delete']
      }
    }
  };
};
const createRestoreItem = (model, path, tag) => {
  return {
    name: 'Restore',
    request: {
      method: 'POST',
      header: [
        {
          key: 'Authorization',
          value: 'Bearer {{JWT}}',
          type: 'text'
        }
      ],
      body: {
        mode: 'formdata',
        formdata: [
          ...model.primaryKeyAttributes.map((primaryKeyAttribute) => createFormData(lodash.snakeCase(primaryKeyAttribute))),
          createFormData('creby'),
          createFormData('cretime'),
          createFormData('modby'),
          createFormData('modtime'),
          createFormData('user_id'),
          createFormData('user_ip')
        ]
      },
      url: {
        raw: `{{url}}${getBasePath[tag]}${path}/restore`,
        host: ['{{url}}'],
        path: [path, 'restore']
      }
    }
  };
};

const createItem = (model, path, tag) => {
  const additionalItem = Object.keys(model.getAttributes()).includes('isdel')
    ? [createDeleteItem(model, path, tag), createRestoreItem(model, path, tag)]
    : [];

  return {
    name: model.name,
    item: [createSaveItem(model, path, tag), ...additionalItem]
  };
};

const buildItem = () => {
  const items = [];

  items.push(createLoginItem());
  items.push(createRegisterItem());
  routeProps.forEach((route) => {
    items.push(createItem(route.dbModel, route.path, route.tag));
  });

  return items;
};

const postmanCollectionBuilder = () => {
  const info = buildInfo('Pantjq API');
  const item = buildItem();

  return { info, item };
};

export default postmanCollectionBuilder;
