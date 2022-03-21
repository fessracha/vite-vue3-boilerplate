module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    indentation: 2,
    'number-leading-zero': 'always',
    'order/properties-order': [
      'content',
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'display',
      'width',
      'height',
      'margin',
      'padding',
      'z-index',
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'max-nesting-depth': 3,
    'block-no-empty': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,

    'number-max-precision': 2,
    'number-no-trailing-zeros': true,

    'string-quotes': 'double',

    'length-zero-no-unit': true,

    'unit-case': 'lower',

    'value-keyword-case': 'lower',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-max-empty-lines': 0,

    'shorthand-property-no-redundant-values': true,

    'property-no-unknown': true,

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,

    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-trailing-semicolon': 'always',

    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-before': 'always',

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-max-id': 0,
    'selector-max-universal': 0,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep'],
    }],
    'selector-type-no-unknown': true,

    'selector-list-comma-newline-after': 'always',

    'rule-empty-line-before': ['always', { except: ['first-nested', 'after-single-line-comment'] }],

    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,

    'at-rule-name-case': 'lower',
    'comment-no-empty': true,

    'max-empty-lines': 1,
    'max-line-length': 120,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
  },
};
