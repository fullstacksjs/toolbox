import { describe, expect, it } from 'vitest';
import { assert } from './assert';

describe('assert', () => {
  it('should throw error when condition is false', () => {
    expect(() => assert(false, 'WTF')).toThrow('WTF');
  });

  it('should not throw error when condition is true', () => {
    expect(() => assert(true, 'WTF')).not.toThrow('WTF');
  });
});
