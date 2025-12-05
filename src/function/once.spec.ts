import { describe, expect, it, vi } from 'vitest';

import { once } from './once';

describe('once', () => {
  it('should execute the function only once', () => {
    const fn = vi.fn(() => 'result');
    const onceFn = once(fn);

    expect(onceFn()).toBe('result');
    expect(onceFn()).toBe('result');
    expect(onceFn()).toBe('result');

    expect(fn).toHaveBeenCalledOnce();
  });

  it('should return the same result on subsequent calls', () => {
    let counter = 0;
    const fn = once(() => ++counter);

    expect(fn()).toBe(1);
    expect(fn()).toBe(1);
    expect(fn()).toBe(1);
  });

  it('should work with functions that have parameters', () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const onceFn = once(fn);

    expect(onceFn(2, 3)).toBe(5);
    expect(onceFn(5, 7)).toBe(5); // Returns cached result
    expect(onceFn(10, 20)).toBe(5); // Returns cached result

    expect(fn).toHaveBeenCalledOnce();
    expect(fn).toHaveBeenCalledWith(2, 3);
  });

  it('should preserve the function context (this)', () => {
    const obj = {
      value: 42,
      getValue: once(function getValue(this: { value: number }) {
        return this.value;
      }),
    };

    expect(obj.getValue()).toBe(42);
    expect(obj.getValue()).toBe(42);
  });

  it('should work with functions that return undefined', () => {
    const fn = vi.fn(() => undefined);
    const onceFn = once(fn);

    expect(onceFn()).toBeUndefined();
    expect(onceFn()).toBeUndefined();

    expect(fn).toHaveBeenCalledOnce();
  });

  it('should work with functions that return objects', () => {
    const obj = { initialized: true };
    const fn = vi.fn(() => obj);
    const onceFn = once(fn);

    const result1 = onceFn();
    const result2 = onceFn();

    expect(result1).toBe(obj);
    expect(result2).toBe(obj);
    expect(result1).toBe(result2);
    expect(fn).toHaveBeenCalledOnce();
  });

  it('should work with async functions', async () => {
    const fn = vi.fn(async () => 'async result');
    const onceFn = once(fn);

    const result1 = await onceFn();
    const result2 = await onceFn();

    expect(result1).toBe('async result');
    expect(result2).toBe('async result');
    expect(fn).toHaveBeenCalledOnce();
  });

  it('should cache the first result even if it is falsy', () => {
    const fn = vi.fn(() => 0);
    const onceFn = once(fn);

    expect(onceFn()).toBe(0);
    expect(onceFn()).toBe(0);

    expect(fn).toHaveBeenCalledOnce();
  });

  it('should handle functions that throw errors', () => {
    const fn = vi.fn(() => {
      throw new Error('Test error');
    });
    const onceFn = once(fn);

    expect(() => onceFn()).toThrow('Test error');
    expect(() => onceFn()).not.toThrow(); // Returns cached undefined
    expect(fn).toHaveBeenCalledOnce();
  });
});
