module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: [
    '/coverage',
    '/dist',
    'jest.config.ts',
    'jest.setup.ts',
    '.eslintrc.js',
    '*.spec.ts'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-template-curly-in-string': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'warn',
      {
        ignoreArrowShorthand: true
      }
    ],
    '@typescript-eslint/key-spacing': 'off'
  },
  overrides: [
    {
      files: ['*spec.ts'],
      env: {
        'jest/globals': true
      },
      plugins: ['jest'],
      extends: ['standard-with-typescript', 'plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        'no-template-curly-in-string': 'off',
        '@typescript-eslint/key-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        'jest/no-mocks-import': 'off',
        'jest/no-commented-out-tests': 'off'
      }
    }
  ]
}
