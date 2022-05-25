module.exports = {
  root: true,

  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },

  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],

  plugins: ['@typescript-eslint'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2022,
    // extraFileExtensions: ['.vue'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    // AIRBNB/CORE
    'no-shadow': 'off',
    'no-new': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'max-len': ['error', {
      code: 180,
      ignoreUrls: true,
    }],
    'no-underscore-dangle': 'off',
    'newline-before-return': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'newline-after-var': 'error',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'arrow-parens': ['error', 'as-needed'],
    indent: [
      'error', 2,
      {
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],

    // TYPESCRIPT
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-shadow': ['error'],

    // VUE
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: [],
    }],
    'vue/custom-event-name-casing': 2,
    'vue/require-prop-types': 2,
    'vue/require-default-prop': 2,
    'vue/order-in-components': 2,
    'vue/html-closing-bracket-newline': 2,
    'vue/mustache-interpolation-spacing': 2,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/attributes-order': 2,
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/no-boolean-default': ['error', 'no-default'],
    // 'vue/no-bare-strings-in-template': ['error', {
    //   allowlist: [
    //     '(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '%', '!', '?', ':', '[', ']', '{', '}', '<', '>', '\u00b7', '\u2022', '\u2010', '\u2013', '\u2014', '\u2212', '|',
    //   ],
    //   attributes: {
    //     '/.+/': ['title', 'aria-label', 'aria-placeholder', 'aria-roledescription', 'aria-valuetext'],
    //     input: ['placeholder'],
    //     img: ['alt'],
    //   },
    //   directives: ['v-text'],
    // }],
    'vue/no-duplicate-attr-inheritance': 2,
    'vue/no-empty-component-block': 2,
    'vue/no-multiple-objects-in-class': 2,
    'vue/no-potential-component-option-typo': ['error', {
      presets: ['vue'],
      custom: [],
      threshold: 1,
    }],
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    }],
    'vue/no-static-inline-styles': ['error', {
      allowBinding: true,
    }],
    'vue/no-template-target-blank': ['error', {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
    }],
    'vue/no-unregistered-components': ['error', {
      ignorePatterns: ['router-link', 'router-view'],
    }],
    'vue/no-unsupported-features': ['error', {
      version: '^3.2.31',
      ignores: [],
    }],
    'vue/no-unused-properties': ['error', {
      groups: ['props'],
    }],
    'vue/no-useless-mustaches': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/no-useless-v-bind': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-name-property': 2,
    'vue/script-indent': ['error', 2, {
      baseIndent: 0,
      switchCase: 0,
      ignores: [],
    }],
    'vue/static-class-names-order': 2,
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/array-bracket-newline': 2,
    'vue/array-bracket-spacing': 2,
    'vue/arrow-spacing': 2,
    'vue/block-spacing': 2,
    'vue/brace-style': 2,
    'vue/template-curly-spacing': 2,
    'vue/prefer-template': 2,
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vuejs-accessibility/click-events-have-key-events': 0,
  },
  overrides: [
    {
      files: [
        'src/components/AppHome.vue',
        'src/components/CreateNew.vue',
      ],
      rules: {
        'vue/no-v-html': 0,
      },
    },
    {
      files: [
        'src/mirage/**/*.ts',
        'vite.config.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: [
        'tests/**/*.ts',
      ],
      rules: {
        '@typescript-eslint/triple-slash-reference': 0,
      },
    },
    // See Note: https://eslint.vuejs.org/rules/script-indent.html#options
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
