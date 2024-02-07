export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
  ],
  plugins: [
    'stylelint-use-nesting',
    '@stylistic/stylelint-plugin',
  ],
  rules: {
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    '@stylistic/indentation': 2,
    '@stylistic/unit-case': 'lower',
    'csstools/use-nesting': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-property-value-no-unknown': true,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
  },
};
