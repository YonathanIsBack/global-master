import LoggerUtilSingleton from '../../src/util/LoggerUtils.js';

describe('LoggerUtils', () => {
  it('should return same object logger when called', () => {
    const expectedResult = LoggerUtilSingleton.logger;

    const actualResult = LoggerUtilSingleton.logger;

    expect(expectedResult).toMatchObject(actualResult);
  });
});
