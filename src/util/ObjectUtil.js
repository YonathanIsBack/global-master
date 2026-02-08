import lodash from 'lodash';

class ObjectUtil {
  constructor() { }

  static toCamelCase(objek) {
    return lodash.mapKeys(objek, (_, key) => {
      return lodash.camelCase(key);
    });
  }

  static toSnakeCase(objek) {
    return lodash.mapKeys(objek, (_, key) => {
      return lodash.snakeCase(key);
    });
  }

  static isObject(objek) {
    return lodash.isObject(objek);
  }

  static isObjectEmpty(objek) {
    return lodash.isEmpty(objek);
  }

  static defaultEmptyString(data, defaultValue = null) {
    if (data === "0000-00-00" || data === "0000-00-00 00:00:00") {
      return null;
    }

    if (data === "") {
      return defaultValue;
    }

    return data;
  }

  static sanitizeObject(objek) {
    const sanitizedObject = {};
    Object.keys(objek).forEach(key => {
      Object.assign(sanitizedObject, { [key]: ObjectUtil.defaultEmptyString(objek[key]) });
    });

    return sanitizedObject;
  }
}

export default ObjectUtil;
