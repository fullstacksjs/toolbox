import { get, matchDev, matchProd, matchTest } from '../src/env';

const envs = {
  prod: 'production',
  dev: 'development',
  test: 'test',
};

describe('env', () => {
  beforeEach(() => {
    Reflect.deleteProperty(process.env, 'NODE_ENV');
  });

  describe('get', () => {
    it('should return current node env', () => {
      const ENV = 'current';
      process.env.NODE_ENV = ENV;
      expect(get()).toBe(ENV);
    });

    it('should fallack to development by default', () => {
      expect(get()).toBe('development');
    });

    it('should fallback to given fallback', () => {
      const ENV = 'fallback';
      expect(get(ENV)).toBe(ENV);
    });

    it('should fallback to null with null input', () => {
      expect(get(null)).toBe(null);
    });
  });

  describe('isDev', () => {
    it('should return true in develepment', () => {
      process.env.NODE_ENV = envs.dev;
      expect(matchDev()).toBe(true);
    });
  });

  describe('isProd', () => {
    it('should return true in production', () => {
      process.env.NODE_ENV = envs.prod;
      expect(matchProd()).toBe(true);
    });
    it('should return true in test', () => {
      process.env.NODE_ENV = envs.test;
      expect(matchTest()).toBe(true);
    });
  });
});
