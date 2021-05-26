module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    warnOnUnsupportedTypeScriptVersion: false,
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/no-v-html': 'error',
    'vue/v-bind-style': 'off',
    'vue/v-on-style': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [
          'keep-alive',
          'transition',
          'transition-group',
          'component',
          'slot',
          'router-link',
          'router-view',
          'nuxt-link',
        ],
      },
    ],
  },
};