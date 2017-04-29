import { TwoDigitsPipe } from './two-digits.pipe';

describe('TwoDigitsPipe', () => {
  it('create an instance', () => {
    const pipe = new TwoDigitsPipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform a 0 into a string of 00', () => {
    const pipe = new TwoDigitsPipe();
    expect(pipe.transform(0)).toBe('00');
  });
  it('should transform a 15 into a string of 15', () => {
    const pipe = new TwoDigitsPipe();
    expect(pipe.transform(15)).toBe('15');
  });
});
