import {
  crlfToLf,
  getInitials,
  isNullOrEmpty,
  removeTrailingSlash,
  toCamelCase,
  toCapitalCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toSpaceCase,
} from '../src/string';

describe('string', () => {
  describe('getInitials', () => {
    it.each`
      x                                                | expected
      ${''}                                            | ${'?'}
      ${' '}                                           | ${'?'}
      ${'frontend'}                                    | ${'F'}
      ${'frontend monsters'}                           | ${'FM'}
      ${'frontend monster rides a dinosaur in office'} | ${'FMRADIO'}
      ${'2'}                                           | ${'2'}
      ${'1 2 3 4'}                                     | ${'1234'}
      ${'x @# % * ))__() 1'}                           | ${'X@%*)1'}
    `('should return $expected for $x as input', ({ x, expected }) => {
      expect(getInitials(x)).toBe(expected);
    });

    it(`should return ? for null as input`, () => {
      expect(getInitials(null as any as string)).toBe('?');
    });

    it(`should return ? for objects as input`, () => {
      expect(getInitials({ str: 'string' } as any as string)).toBe('?');
    });
  });

  describe('crlfToLf', () => {
    it.each`
      x                                        | expected
      ${''}                                    | ${''}
      ${' '}                                   | ${' '}
      ${'hello world'}                         | ${'hello world'}
      ${'hello world\n'}                       | ${'hello world\n'}
      ${'hello world\r\n'}                     | ${'hello world\n'}
      ${'hello world\r\n\n'}                   | ${'hello world\n\n'}
      ${'hello world\r\nbut how is world\r\n'} | ${'hello world\nbut how is world\n'}
      ${'hello world\r'}                       | ${'hello world\r'}
      ${'hello world\r\r\r\n'}                 | ${'hello world\r\r\n'}
    `('should return $expected for $x as input', ({ x, expected }) => {
      expect(crlfToLf(x)).toBe(expected);
    });
  });

  describe('toSpaceCase', () => {
    it.each`
      x                   | expected
      ${''}               | ${''}
      ${' '}              | ${' '}
      ${'foo'}            | ${'foo'}
      ${'foo bar'}        | ${'foo bar'}
      ${'foo-bar'}        | ${'foo bar'}
      ${'fooBar'}         | ${'foo bar'}
      ${'foo_bar'}        | ${'foo bar'}
      ${'foo bar code'}   | ${'foo bar code'}
      ${'foo-bar-code'}   | ${'foo bar code'}
      ${'fooBarCode'}     | ${'foo bar code'}
      ${'foo_bar_code'}   | ${'foo bar code'}
      ${'FOO_BAR_CODE'}   | ${'foo bar code'}
      ${'FOO BAR CODE'}   | ${'foo bar code'}
      ${'foo_ -BaRC ode'} | ${'foo_ -BaRC ode'}
    `('should return $expected for $x as input', ({ x, expected }) => {
      expect(toSpaceCase(x)).toBe(expected);
    });
  });

  describe('toCamelCase', () => {
    it.each`
      x                   | expected
      ${''}               | ${''}
      ${' '}              | ${' '}
      ${'foo'}            | ${'foo'}
      ${'foo bar'}        | ${'fooBar'}
      ${'foo-bar'}        | ${'fooBar'}
      ${'fooBar'}         | ${'fooBar'}
      ${'foo_bar'}        | ${'fooBar'}
      ${'foo bar code'}   | ${'fooBarCode'}
      ${'foo-bar-code'}   | ${'fooBarCode'}
      ${'fooBarCode'}     | ${'fooBarCode'}
      ${'foo_bar_code'}   | ${'fooBarCode'}
      ${'FOO_BAR_CODE'}   | ${'fooBarCode'}
      ${'foo_ -BaRC ode'} | ${'foo_ -BaRC ode'}
    `('should return $expected for $x as input', ({ x, expected }) => {
      expect(toCamelCase(x)).toBe(expected);
    });
  });

  describe('toPascalCase', () => {
    it.each`
      x                   | expected
      ${''}               | ${''}
      ${' '}              | ${' '}
      ${'foo'}            | ${'Foo'}
      ${'foo bar'}        | ${'FooBar'}
      ${'foo-bar'}        | ${'FooBar'}
      ${'fooBar'}         | ${'FooBar'}
      ${'foo_bar'}        | ${'FooBar'}
      ${'foo bar code'}   | ${'FooBarCode'}
      ${'foo-bar-code'}   | ${'FooBarCode'}
      ${'fooBarCode'}     | ${'FooBarCode'}
      ${'foo_bar_code'}   | ${'FooBarCode'}
      ${'FOO_BAR_CODE'}   | ${'FooBarCode'}
      ${'foo_ -BaRC ode'} | ${'foo_ -BaRC ode'}
    `('should return $expected for $x as input', ({ x, expected }) => {
      expect(toPascalCase(x)).toBe(expected);
    });
  });

  describe('toSnakeCase', () => {
    it.each`
      x                   | expected
      ${''}               | ${''}
      ${' '}              | ${' '}
      ${'foo'}            | ${'foo'}
      ${'foo bar'}        | ${'foo_bar'}
      ${'foo-bar'}        | ${'foo_bar'}
      ${'fooBar'}         | ${'foo_bar'}
      ${'foo_bar'}        | ${'foo_bar'}
      ${'foo bar code'}   | ${'foo_bar_code'}
      ${'foo-bar-code'}   | ${'foo_bar_code'}
      ${'fooBarCode'}     | ${'foo_bar_code'}
      ${'foo_bar_code'}   | ${'foo_bar_code'}
      ${'FOO_BAR_CODE'}   | ${'foo_bar_code'}
      ${'foo_ -BaRC ode'} | ${'foo_ -BaRC ode'}
    `('should return $expected for $x as input', ({ x, expected }) => {
      expect(toSnakeCase(x)).toBe(expected);
    });
  });

  describe('toKebabCase', () => {
    it.each`
      x                   | expected
      ${''}               | ${''}
      ${' '}              | ${' '}
      ${'foo'}            | ${'foo'}
      ${'foo bar'}        | ${'foo-bar'}
      ${'foo-bar'}        | ${'foo-bar'}
      ${'fooBar'}         | ${'foo-bar'}
      ${'foo_bar'}        | ${'foo-bar'}
      ${'foo bar code'}   | ${'foo-bar-code'}
      ${'foo-bar-code'}   | ${'foo-bar-code'}
      ${'fooBarCode'}     | ${'foo-bar-code'}
      ${'foo_bar_code'}   | ${'foo-bar-code'}
      ${'FOO_BAR_CODE'}   | ${'foo-bar-code'}
      ${'foo_ -BaRC ode'} | ${'foo_ -BaRC ode'}
    `('should return $expected for $x as input', ({ x, expected }) => {
      expect(toKebabCase(x)).toBe(expected);
    });
  });
});

describe('toCapitalCase', () => {
  it.each`
    x           | expected
    ${''}       | ${''}
    ${' '}      | ${' '}
    ${'foo'}    | ${'Foo'}
    ${'Foo'}    | ${'Foo'}
    ${'FOOBAR'} | ${'Foobar'}
  `('should return $expected for $x as input', ({ x, expected }) => {
    expect(toCapitalCase(x)).toBe(expected);
  });
});

describe('isNullOrEmpty', () => {
  it.each`
    x            | expected
    ${null}      | ${true}
    ${undefined} | ${true}
    ${''}        | ${true}
    ${[]}        | ${true}
    ${1}         | ${false}
    ${[1]}       | ${false}
    ${'f'}       | ${false}
  `('should return $expected for $x as input', ({ x, expected }) => {
    expect(isNullOrEmpty(x)).toBe(expected);
  });
});

describe('removeTrailingSlash', () => {
  it.each`
    x             | expected
    ${''}         | ${''}
    ${'/'}        | ${''}
    ${'string'}   | ${'string'}
    ${'string/'}  | ${'string'}
    ${'string//'} | ${'string'}
  `('should return $expected for $x as input', ({ x, expected }) => {
    expect(removeTrailingSlash(x)).toBe(expected);
  });
});
