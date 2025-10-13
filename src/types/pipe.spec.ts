import { pipe } from './pipe';

const zeroParamGetNumber = () => 1;
const singleParamFnAdd1 = (n: number) => n + 1;
const singleParamFnTimes2 = (n: number) => n * 2;
const multipleParamFnDifference = (a: number, b: number) => a - b;

describe('pipe', () => {
  it('works when first function has 0 params', () => {
    expect(pipe(zeroParamGetNumber, singleParamFnAdd1)()).toBe(2);
  });

  it('works when first function has single param', () => {
    expect(pipe(singleParamFnAdd1)(1)).toBe(2);
    expect(pipe(singleParamFnAdd1, singleParamFnTimes2)(1)).toBe(4);
    expect(
      pipe(singleParamFnAdd1, singleParamFnTimes2, singleParamFnAdd1)(1),
    ).toBe(5);
    expect(
      pipe(
        singleParamFnAdd1,
        singleParamFnTimes2,
        singleParamFnAdd1,
        singleParamFnTimes2,
      )(1),
    ).toBe(10);
    expect(
      pipe(
        singleParamFnAdd1,
        singleParamFnTimes2,
        singleParamFnAdd1,
        singleParamFnTimes2,
        singleParamFnAdd1,
      )(1),
    ).toBe(11);
    expect(
      pipe(
        singleParamFnAdd1,
        singleParamFnTimes2,
        singleParamFnAdd1,
        singleParamFnTimes2,
        singleParamFnAdd1,
        singleParamFnTimes2,
      )(1),
    ).toBe(22);
  });

  it('works when first function has multiple params', () => {
    expect(pipe(multipleParamFnDifference, singleParamFnAdd1)(5, 4)).toBe(2);
  });
});
