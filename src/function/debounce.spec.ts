import { debounce } from './debounce';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should execute once after the delay', () => {
    let executionCount = 0;

    const execute = () => {
      executionCount++;
    };

    const debouncedFunction = debounce(execute, 1000, false);
    debouncedFunction();
    vi.advanceTimersByTime(1000);

    expect(executionCount).toBe(1);
  });

  it('should not execute before the delay', () => {
    let executionCount = 0;

    const execute = () => {
      executionCount++;
    };

    const debouncedFunction = debounce(execute, 1000, false);
    debouncedFunction();
    vi.advanceTimersByTime(500);

    expect(executionCount).toBe(0);
  });

  it('should execute once after the last call with delay', () => {
    let executionCount = 0;

    const execute = () => {
      executionCount++;
    };

    const debouncedFunction = debounce(execute, 1000, false);

    for (let i = 0; i < 10; i++) {
      debouncedFunction();
      vi.advanceTimersByTime(500);
    }
    vi.advanceTimersByTime(500);

    expect(executionCount).toBe(1);
  });

  it('should execute whenever not called within the delay period', () => {
    let executionCount = 0;

    const execute = () => {
      executionCount++;
    };

    const debouncedFunction = debounce(execute, 1000, false);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        debouncedFunction();
        vi.advanceTimersByTime(500);
      }
      vi.advanceTimersByTime(500);
    }

    expect(executionCount).toBe(5);
  });

  it('should execute immediately', () => {
    let executionCount = 0;

    const execute = () => {
      executionCount++;
    };

    const debouncedFunction = debounce(execute, 1000, true);
    debouncedFunction();

    expect(executionCount).toBe(1);
  });

  it('should not execute after the delay if immediate is true', () => {
    let executionCount = 0;

    const execute = () => {
      executionCount++;
    };

    const debouncedFunction = debounce(execute, 1000, true);
    debouncedFunction();
    vi.advanceTimersByTime(1000);

    expect(executionCount).toBe(1);
  });

  it('should execute whenever not called within the delay period and then execute immediately with another call', () => {
    let executionCount = 0;

    const execute = () => {
      executionCount++;
    };

    const debouncedFunction = debounce(execute, 1000, true);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 10; j++) {
        debouncedFunction();
        vi.advanceTimersByTime(500);
      }
      vi.advanceTimersByTime(500);
    }

    expect(executionCount).toBe(10);
  });
});
