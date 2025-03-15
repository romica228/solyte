import { dirname } from 'path';
import { fileURLToPath } from 'url';
import nextPlugin from '@next/eslint-plugin-next';
import { parser as tsParser, plugin as tsPlugin } from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  // Apply to all files
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**', 'build/**'],
  },

  // Base JS/TS configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@next/next': nextPlugin,
    },
    rules: {
      // Next.js rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'warn',
      '@next/next/no-img-element': 'warn',

      // React specific rules
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'warn',
      'react/display-name': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility rules
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-role': 'warn',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',

      // General code quality
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
    },
    settings: {
      react: {
        version: 'detect',
      },
      next: {
        rootDir: __dirname,
      },
    },
  },
];
