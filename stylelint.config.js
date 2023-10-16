export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
  ],
  plugins: [
    'stylelint-use-nesting',
  ],
  rules: {
    'csstools/use-nesting': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-trailing-semicolon': 'always',
    'declaration-property-value-no-unknown': true,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
  },
};
