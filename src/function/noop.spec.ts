import { describe, expect, it } from 'vitest';
import { noop } from './noop';

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBeUndefined();
  });
});