import { pruneNullOrEmpty } from '../src/object';

describe('Objects', () => {
  describe('pruneNullOrEmpty', () => {
    it('should return empty object', () => {
      expect(
        pruneNullOrEmpty({ name: null, age: '', nickname: undefined }),
      ).toEqual({});
    });

    it("should return object with just one property 'name'", () => {
      expect(
        pruneNullOrEmpty({
          name: 'John',
          age: null,
          status: '',
          nickname: undefined,
        }),
      ).toEqual({ name: 'John' });
    });
  });
});
