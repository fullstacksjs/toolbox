import {
  beforeEach,
  afterAll,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { Env, getBooleanEnv, getEnv, getNodeEnv, getRequiredEnv } from './env';

const envs = {
  prod: 'production',
  dev: 'development',
  test: 'test',
};

let originalEnv = process.env;

describe('env', () => {
  beforeAll(() => {
    originalEnv = process.env;
  });

  beforeEach(() => {
    // @ts-ignore Clear env
    process.env = {};
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe('getEnv', () => {
    it('should return env if exists', () => {
      const value = 'current';
      const key = 'key';
      vi.stubEnv(key, value);

      expect(getEnv(key)).toBe(value);
    });

    it('should return env even if fallback exists', () => {
      const value = 'value';
      const key = 'key';
      const fallback = 'fallback';
      vi.stubEnv(key, value);

      expect(getEnv(key, fallback)).toBe(value);
    });

    it('should fallback to given fallback', () => {
      const key = 'key';
      const fallback = 'fallback';
      process.env[key] = undefined;

      expect(getEnv(key, fallback)).toBe(fallback);
    });

    it('should fallback to given fallback if value is empty string', () => {
      const key = 'key';
      const fallback = 'fallback';
      vi.stubEnv(key, '');

      expect(getEnv(key, fallback)).toBe(fallback);
    });

    it('should undefined when env does not exist', () => {
      expect(getBooleanEnv('not-existed')).toBe(undefined);
    });
  });

  describe('getBooleanEnv', () => {
    it('should return boolean env if exists', () => {
      const falseKey = 'false';
      vi.stubEnv(falseKey, 'false');
      const trueKey = 'true';
      vi.stubEnv(trueKey, 'true');

      expect(getBooleanEnv(falseKey)).toBe(false);
      expect(getBooleanEnv(trueKey)).toBe(true);
      expect(getBooleanEnv(falseKey, true)).toBe(false);
      expect(getBooleanEnv(trueKey, false)).toBe(true);
    });

    it('should fallback to given fallback', () => {
      const fallback = false;

      expect(getBooleanEnv('not-existed', fallback)).toBe(fallback);
    });

    it('should fallback to given fallback', () => {
      const fallback = false;

      expect(getBooleanEnv('not-existed', fallback)).toBe(fallback);
    });

    it('should fallback to given fallback if env is empty string', () => {
      const fallback = false;
      const key = 'key';
      process.env[key] = '';

      expect(getBooleanEnv(key, fallback)).toBe(fallback);
    });

    it('should throw error if env is not a json', () => {
      const key = 'key';
      process.env[key] = 'NOT-JSON';

      expect(() => getBooleanEnv(key)).toThrowError();
      expect(() => getBooleanEnv(key, false)).toThrowError();
    });

    it('should throw error if env is a json but not a boolean', () => {
      const key = 'key';
      process.env[key] = '{}';

      expect(() => getBooleanEnv(key)).toThrowError();
      expect(() => getBooleanEnv(key, false)).toThrowError();
    });

    it('should undefined when env does not exist', () => {
      expect(getBooleanEnv('not-existed')).toBe(undefined);
    });
  });

  describe('getNodeEnv', () => {
    it('should return current node env', () => {
      const ENV = 'current';
      vi.stubEnv('NODE_ENV', ENV);

      expect(getNodeEnv()).toBe(ENV);
    });

    it('should fallback to given fallback', () => {
      const ENV = 'fallback';

      expect(getNodeEnv(ENV)).toBe(ENV);
    });
  });

  describe('getRequiredEnv', () => {
    it('should throw if env missing', () => {
      const key = 'key';
      process.env[key] = undefined;

      expect(() => getRequiredEnv(key)).toThrowError(/required/);
    });

    it('should throw if env empty string', () => {
      const key = 'key';
      process.env[key] = '';

      expect(() => getRequiredEnv(key)).toThrowError(/required/);
    });

    it('should return value if present', () => {
      const key = 'key';
      const value = 'value';
      process.env[key] = value;

      expect(getRequiredEnv(key)).toBe(value);
    });
  });

  describe('is', () => {
    it('should return true in development environment', () => {
      vi.stubEnv('NODE_ENV', envs.dev);

      expect(Env.is(envs.dev)).toBe(true);
    });

    it('should return true in dev environment', () => {
      vi.stubEnv('NODE_ENV', 'dev');

      expect(Env.is(envs.dev)).toBe(false);
    });

    it('should return true in production', () => {
      vi.stubEnv('NODE_ENV', envs.prod);

      expect(Env.is(envs.prod)).toBe(true);
    });

    it('should return true in prod environment', () => {
      vi.stubEnv('NODE_ENV', 'prod');

      expect(Env.is(envs.prod)).toBe(false);
    });
  });
});
