import { getSignPrice } from '../getSignPrice';
import { data } from './constants';

describe('getSignPrice', () => {
  data.forEach(({ inputValue, expectedResult }) => {
    const { prevTicker, ticker } = inputValue;

    it(`should be correct data if input value ${inputValue}`, () => {
      const sign = getSignPrice(prevTicker, ticker);

      expect(sign).toEqual(expectedResult);
    });
  });
});
