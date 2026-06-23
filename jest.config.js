const preset = require('@react-native/jest-preset/jest-preset');

module.exports = {
  ...preset,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@rntp)/)',
  ],
  moduleNameMapper: {
    ...preset.moduleNameMapper,
    '\\.m4a$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    ...preset.transform,
    '^.+\\.(m4a|mp3|wav|aac)$': require.resolve(
      '@react-native/jest-preset/jest/assetFileTransformer.js',
    ),
  },
};
