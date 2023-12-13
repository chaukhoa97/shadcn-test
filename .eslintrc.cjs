module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser', // only for ts
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // from eslint-plugin-react
    'plugin:react/jsx-runtime', // from eslint-plugin-react
    'plugin:react-hooks/recommended', // from eslint-plugin-react-hooks
    'plugin:@typescript-eslint/recommended', // only for ts
    'prettier', // put this last so it can override other configs
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off', // only for ts
    '@typescript-eslint/no-unused-vars': 'off', // only for ts
    '@typescript-eslint/no-empty-function': 'off', // only for ts
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
