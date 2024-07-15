import {beforeEach, describe, expect, it} from 'vitest';
import {
  clearMocks,
  mockDenoGlobal,
  mockNodeGlobal,
  mockWindowGlobal,
} from './fixtures';
import {isDeno} from './isDeno';

describe('isDeno', () => {
  beforeEach(() => {
    clearMocks();
  });

  it('should return false in browser', () => {
    mockWindowGlobal();

    expect(isDeno()).toBe(false);
  });

  it('should return false in node', () => {
    mockNodeGlobal();

    expect(isDeno()).toBe(false);
  });

  it('should return true in deno', () => {
    mockDenoGlobal();

    expect(isDeno()).toBe(true);
  });
});
