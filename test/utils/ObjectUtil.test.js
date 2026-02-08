import ObjectUtil from '../../src/util/ObjectUtil.js';

describe('ObjectUtil', () => {
  describe('toCamelCase', () => {
    it('should return camel cased object when given snake case object', () => {
      const snakeCaseObject = {
        property_one: 'Value One',
        property_two: 'Value Two',
        property_three: 'Value Three'
      };
      const expectedObject = {
        propertyOne: 'Value One',
        propertyTwo: 'Value Two',
        propertyThree: 'Value Three'
      };

      const actualObject = ObjectUtil.toCamelCase(snakeCaseObject);

      expect(expectedObject).toEqual(actualObject);
    });

    it('should return camel cased object when given camel case object', () => {
      const snakeCaseObject = {
        propertyOne: 'Value One',
        propertyTwo: 'Value Two',
        propertyThree: 'Value Three'
      };
      const expectedObject = {
        propertyOne: 'Value One',
        propertyTwo: 'Value Two',
        propertyThree: 'Value Three'
      };

      const actualObject = ObjectUtil.toCamelCase(snakeCaseObject);

      expect(expectedObject).toEqual(actualObject);
    });
  });

  describe('toSnakeCase', () => {
    it('should return snake cased object when given camel case object', () => {
      const camelCaseObject = {
        propertyOne: 'Value One',
        propertyTwo: 'Value Two',
        propertyThree: 'Value Three'
      };
      const expectedObject = {
        property_one: 'Value One',
        property_two: 'Value Two',
        property_three: 'Value Three'
      };

      const actualObject = ObjectUtil.toSnakeCase(camelCaseObject);

      expect(expectedObject).toEqual(actualObject);
    });

    it('should return snake case object when given snake case object', () => {
      const camelCaseObject = {
        property_one: 'Value One',
        property_two: 'Value Two',
        property_three: 'Value Three'
      };
      const expectedObject = {
        property_one: 'Value One',
        property_two: 'Value Two',
        property_three: 'Value Three'
      };

      const actualObject = ObjectUtil.toSnakeCase(camelCaseObject);

      expect(expectedObject).toEqual(actualObject);
    });
  });

  describe('defaultEmptyString', () => {
    it('should return original value when given variable that contain value', () => {
      const expectedResult = "This is a value";

      const actualResult = ObjectUtil.defaultEmptyString(expectedResult);

      expect(expectedResult).toEqual(actualResult);
    });

    it('should return undefined when given variable that contain empty string', () => {
      const data = "";

      const actualResult = ObjectUtil.defaultEmptyString(data);

      expect(actualResult).toBeNull();
    })

    it('should return null when given variable that contain empty string and provided null', () => {
      const data = "";

      const actualResult = ObjectUtil.defaultEmptyString(data, null);

      expect(actualResult).toBeNull();
    })
  });

  describe('isObjectEmpty', () => {
    it('should return true', () => {
      const object = {};

      const actualResult = ObjectUtil.isObjectEmpty(object);

      expect(actualResult).toBeTruthy();
    });
    it('should return false', () => {
      const object = {
        parameter: 'parameter'
      };

      const actualResult = ObjectUtil.isObjectEmpty(object);

      expect(actualResult).toBeFalsy();
    });
  });

  describe('isObject', () => {
    it('should return true when given object', () => {
      const objek = {}

      const actualResult = ObjectUtil.isObject(objek);

      expect(actualResult).toBeTruthy();
    });
    it.each([
      [""],
      [12345],
    ])('should return false when not given object', (example) => {
      console.log(example)
      const actualResult = ObjectUtil.isObject(example);

      expect(actualResult).toBeFalsy();
    });
  });
});
