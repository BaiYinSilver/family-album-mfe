// eslint-disable-next-line no-undef
module.exports = {
  rootDir: './',
  preset: 'ts-jest',
  resolver: 'jest-ts-webcompat-resolver',
  testEnvironment: './jest.environment.cjs',
  testMatch: ['**/__tests__/**/*.spec.ts'],
  collectCoverageFrom: ['src/modules/**/*.ts', 'src/plugins/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/plugins/logger/index.ts'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
