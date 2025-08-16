import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: { parser: tsParser, sourceType: 'module', ecmaVersion: 'latest' },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'no-console': 'warn'
    }
  },
  {
    files: ['**/*.{js,cjs,mjs}'],
    rules: { 'no-console': 'warn' }
  }
];
