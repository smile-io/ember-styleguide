module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['ember', 'prettier'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'no-empty': ['error', { allowEmptyCatch: true }],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true }],
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    semi: ['error', 'always'],

    'prettier/prettier': 'error',

    'ember/order-in-models': [
      'error',
      {
        order: [
          // prettier-ignore
          'service',
          'attribute',
          'relationship',
          'single-line-function',
          'multi-line-function',
        ],
      },
    ],

    'ember/order-in-components': [
      'error',
      {
        order: [
          'service',
          'property',
          'empty-method',
          'single-line-function',
          'multi-line-function',
          'observer',
          'method',
          'init',
          'didReceiveAttrs',
          'willRender',
          'willInsertElement',
          'didInsertElement',
          'didRender',
          'didUpdateAttrs',
          'willUpdate',
          'didUpdate',
          'willDestroyElement',
          'willClearRender',
          'didDestroyElement',
          'actions',
        ],
      },
    ],

    'ember/order-in-controllers': [
      'error',
      {
        order: [
          'query-params',
          'service',
          'controller',
          'inherited-property',
          'empty-method',
          'property',
          'single-line-function',
          'multi-line-function',
          'observer',
          'method',
          'actions',
        ],
      },
    ],

    'ember/order-in-routes': [
      'error',
      {
        order: [
          'service',
          'inherited-property',
          'property',
          'single-line-function',
          'multi-line-function',
          'beforeModel',
          'model',
          'afterModel',
          'serialize',
          'setupController',
          'redirect',
          'activate',
          'renderTemplate',
          'resetController',
          'deactivate',
          'method',
          'actions',
          'empty-method',
        ],
      },
    ],
  },
};
