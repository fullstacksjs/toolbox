import { nullableTryCatch } from './nullableTryCatch.ts';

describe(nullableTryCatch, () => {
  it('should call the passed function to it', () => {
    const execute = vi.fn();
    nullableTryCatch(execute);

    expect(execute).toHaveBeenCalledWith();
  });

  it('should return the function return value', () => {
    const execute = () => 1;
    const value = nullableTryCatch(execute);

    expect(value).toBe(1);
  });

  it('should return null on error', () => {
    const execute = () => {
      throw '';
    };

    expect(nullableTryCatch(execute)).toBeNull();
  });
});
