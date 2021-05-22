import { Env, getEnv, getNodeEnv, getRequiredEnv } from '../src/env';

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
      process.env.NODE_ENV = ENV;
      expect(getNodeEnv()).toBe(ENV);
    });

    it('should fallback to given fallback', () => {
      const ENV = 'fallback';
      expect(getNodeEnv(ENV)).toBe(ENV);
    });
  });

  describe('getRequiredEnv', () => {
    it('should throw if env and fallback missing', () => {
      const key = 'key';
      expect(() => getRequiredEnv(key)).toThrowError();
    });

    it('should return fallback if fallback present', () => {
      const key = 'key';
      const fallback = 'fallback';
      expect(getRequiredEnv(key, fallback)).toBe(fallback);
    });

    it('should return value if present', () => {
      const key = 'key';
      const value = 'value';
      process.env[key] = value;
      expect(getRequiredEnv(key)).toBe(value);
    });

    it('should return value if both value and fallback present', () => {
      const key = 'key';
      const fallback = 'fallback';
      const value = 'value';
      process.env[key] = value;
      expect(getRequiredEnv(key, fallback)).toBe(value);
    });
  });

  describe('isDev', () => {
    it('should return true in development environment', () => {
      process.env.NODE_ENV = envs.dev;
      expect(Env.matchDev()).toBe(true);
    });
    it('should return true in dev environment', () => {
      process.env.NODE_ENV = 'dev';
      expect(Env.matchDev()).toBe(true);
    });
  });

  describe('isProd', () => {
    it('should return true in production', () => {
      process.env.NODE_ENV = envs.prod;
      expect(Env.matchProd()).toBe(true);
    });
    it('should return true in prod environment', () => {
      process.env.NODE_ENV = 'prod';
      expect(Env.matchProd()).toBe(true);
    });
  });

  describe('isTest', () => {
    it('should return true in test', () => {
      process.env.NODE_ENV = envs.test;
      expect(Env.matchTest()).toBe(true);
    });
  });

  describe('match', () => {
    it('should return false if env is different', () => {
      process.env.NODE_ENV = 'production';
      expect(Env.match('development')).toBe(false);
    });

    it('should return true if env exact same', () => {
      process.env.NODE_ENV = 'production';
      expect(Env.match('production')).toBe(true);
    });

    it('should return true if env differs in casing', () => {
      process.env.NODE_ENV = 'production';
      expect(Env.match('ProductioN')).toBe(true);
    });

    it('should return true if env starts with input', () => {
      process.env.NODE_ENV = 'production';
      expect(Env.match('prod')).toBe(true);
    });

    it('should return true if env starts with input with different case', () => {
      process.env.NODE_ENV = 'production';
      expect(Env.match('Prod')).toBe(true);
    });

    it('should return false if env ends with input', () => {
      process.env.NODE_ENV = 'production';
      expect(Env.match('ion')).toBe(false);
    });
  });
});
