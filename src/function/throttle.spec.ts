import { throttle } from './throttle';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
const DELAY = 1000;
describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should pass arguments to original callback', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: DELAY }, callback);
    throttled(1, 2, 3);

    expect(callback).toHaveBeenCalledWith(1, 2, 3);
  });

  it('should execute callback once', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: DELAY }, callback);
    throttled();
    throttled();
    throttled();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should execute callback again after delay', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: DELAY }, callback);
    throttled();
    vi.advanceTimersByTime(1000);
    throttled();

    expect(callback).toBeCalledTimes(2);
  });

  it('should not execute function within the delay time', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: DELAY }, callback);
    throttled(1);
    throttled(2);
    vi.advanceTimersByTime(200);
    throttled(3);
    throttled(4);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not execute callback function when throttled function is never called', () => {
    const callback = vi.fn();

    const throttled = throttle({ delay: DELAY }, callback);

    expect(callback).toHaveBeenCalledTimes(0);
  });

  //   it('should execute once after the last call with delay', () => {
  //     const execute = vi.fn();

  //     const debouncedFunction = debounce({ delay: 1000 }, execute);

  //     for (let i = 0; i < 10; i++) {
  //       debouncedFunction();
  //       vi.advanceTimersByTime(500);
  //     }
  //     vi.advanceTimersByTime(500);

  //     expect(execute).toBeCalledTimes(1);
  //   });

  //   it('should execute whenever not called within the delay period', () => {
  //     const execute = vi.fn();

  //     const debouncedFunction = debounce({ delay: 1000 }, execute);

  //     for (let i = 0; i < 5; i++) {
  //       for (let j = 0; j < 10; j++) {
  //         debouncedFunction();
  //         vi.advanceTimersByTime(500);
  //       }
  //       vi.advanceTimersByTime(500);
  //     }

  //     expect(execute).toBeCalledTimes(5);
  //   });

  //   it('should execute immediately', () => {
  //     const execute = vi.fn();

  //     const debouncedFunction = debounce(
  //       { delay: 1000, immediate: true },
  //       execute,
  //     );
  //     debouncedFunction();

  //     expect(execute).toBeCalledTimes(1);
  //   });

  //   it('should not execute after the delay if immediate is true', () => {
  //     const execute = vi.fn();

  //     const debouncedFunction = debounce(
  //       { delay: 1000, immediate: true },
  //       execute,
  //     );
  //     debouncedFunction();
  //     vi.advanceTimersByTime(1000);

  //     expect(execute).toBeCalledTimes(1);
  //   });

  //   it('should execute whenever not called within the delay period and then execute immediately with another call', () => {
  //     const execute = vi.fn();

  //     const debouncedFunction = debounce(
  //       { delay: 1000, immediate: true },
  //       execute,
  //     );

  //     for (let i = 0; i < 5; i++) {
  //       for (let j = 0; j < 10; j++) {
  //         debouncedFunction();
  //         vi.advanceTimersByTime(500);
  //       }
  //       vi.advanceTimersByTime(500);
  //     }

  //     expect(execute).toBeCalledTimes(10);
  //   });
});
