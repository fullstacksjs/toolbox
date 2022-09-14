import { beforeEach, describe, expect, it } from 'vitest';

import { Env, getEnv, getNodeEnv, getRequiredEnv } from './env';

const envs = {
  prod: 'production',
  dev: 'development',
  test: 'test',
};

describe('env', () => {
  beforeEach(() => {
    process.env = {};
  });

  describe('getEnv', () => {
    it('should return env if exists', () => {
      const ENV = 'current';
      const key = 'key';
      process.env[key] = ENV;

      expect(getEnv(key)).toBe(ENV);
    });

    it('should return env even fallback is exists', () => {
      const value = 'value';
      const key = 'key';
      const fallback = 'fallback';
      process.env[key] = value;

      expect(getEnv(key, fallback)).toBe(value);
    });

    it('should fallback to given fallback', () => {
      const key = 'key';
      const fallback = 'fallback';

      expect(getEnv(key, fallback)).toBe(fallback);
    });
  });

  describe('getNodeEnv', () => {
    it('should return current node env', () => {
      const ENV = 'current';
      process.env['NODE_ENV'] = ENV;

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

      expect(() => getRequiredEnv(key)).toThrowError();
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
      process.env['NODE_ENV'] = envs.dev;

      expect(Env.is(envs.dev)).toBe(true);
    });

    it('should return true in dev environment', () => {
      process.env['NODE_ENV'] = 'dev';

      expect(Env.is(envs.dev)).toBe(false);
    });

    it('should return true in production', () => {
      process.env['NODE_ENV'] = envs.prod;

      expect(Env.is(envs.prod)).toBe(true);
    });

    it('should return true in prod environment', () => {
      process.env['NODE_ENV'] = 'prod';

      expect(Env.is(envs.prod)).toBe(false);
    });
  });
});
