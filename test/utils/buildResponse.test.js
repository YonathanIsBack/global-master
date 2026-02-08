import { StatusCodes } from 'http-status-codes';
import buildResponse from '../../src/util/buildResponse.js';

describe('buildResponse', () => {
  it('should return proper object when given proper parameter', () => {
    const expectedResult = {
      status: 200,
      message: 'CREATED',
      data: { id: 1, message_result: 'message result', under_scored: 'underscored' }
    };

    const actualResult = buildResponse(StatusCodes.OK, 'CREATED', {
      id: 1,
      messageResult: 'message result',
      under_scored: 'underscored'
    });

    expect(expectedResult).toEqual(actualResult);
  });
  it('should return object without data when given undefined data parameter', () => {
    const expectedResult = {
      status: 200,
      message: 'CREATED'
    };

    const actualResult = buildResponse(StatusCodes.OK, 'CREATED');

    expect(expectedResult).toEqual(actualResult);
  });
});
