export default {
  extends: [
    'plugin:github/recommended',
    'plugin:github/browser',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'github',
    'sonarjs',
  ],
  ignores: [
    'node_modules/**/*.js',
    'dist/**/*.js',
  ],
  prettier: false,
  semicolon: true,
  space: 2,
  rules: {
    'arrow-parens': ['error', 'always'],
    camelcase: 'off',
    curly: ['error', 'multi-line'],
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: false,
    }],
    'prettier/prettier': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    }],
    'unicorn/filename-case': ['error', {
      case: 'snakeCase',
    }],
  },
};
