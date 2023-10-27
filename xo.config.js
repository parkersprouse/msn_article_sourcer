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
  global: ['browser'],
  prettier: false,
  semicolon: true,
  space: 2,
  rules: {
    'arrow-parens': ['error', 'always'],
    camelcase: 'off',
    'capitalized-comments': 'off',
    curly: ['error', 'multi-line'],
    'github/no-inner-html': 'off',
    'github/no-then': 'off',
    'i18n-text/no-en': 'off',
    'object-curly-spacing': ['error', 'always', {
      arraysInObjects: false,
    }],
    'prettier/prettier': 'off',
    'sonarjs/cognitive-complexity': 'off',
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
