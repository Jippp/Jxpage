/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  // 继承其他的规则
  extends: [
    'eslint:recommended',
    "prettier",
    "plugin:prettier/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  // 接入插件系统，补充eslint的能力
  plugins: ['react-refresh', "prettier",],
  rules: {
    'no-useless-catch': 'off',
    "prettier/prettier": "error",
    'react-refresh/only-export-components': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off'
  },
}
