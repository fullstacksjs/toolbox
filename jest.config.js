module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '\\.ts$': 'ts-jest',
  },
  testRegex: '/__tests__/.*\\.ts$',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
