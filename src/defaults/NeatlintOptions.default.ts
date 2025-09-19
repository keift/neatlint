import TSESLint from 'typescript-eslint';
import ESLintJS from '@eslint/js';

import type { NeatlintOptions } from '../types/NeatlintOptions.type';

export const NeatlintOptionsDefault: NeatlintOptions = {
  disabled: false,

  ignores: ['./dist/**'],

  javascript: {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    languageOptions: {},
    plugins: {},

    rules: {
      ...ESLintJS.configs.recommended.rules,
      'no-undef': 'off',

      
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'no-duplicate-imports': 'error',
      'no-eval': 'error',
      'no-restricted-syntax': ['error', 'DebuggerStatement', 'EmptyStatement', 'ForInStatement', 'LabeledStatement', 'SequenceExpression', 'SwitchStatement', 'WithStatement'],
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
      eqeqeq: 'error'
    }
  },

  typescript: {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    languageOptions: {
      parser: TSESLint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': TSESLint.plugin
    },

    rules: {
      ...(Object.assign({}, ...TSESLint.configs.strictTypeChecked.map((item) => item.rules ?? {})) as Record<string, unknown>),
      ...(Object.assign({}, ...TSESLint.configs.stylisticTypeChecked.map((item) => item.rules ?? {})) as Record<string, unknown>),

      '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // stylisticTypeChecked but different
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error'
    }
  }
};
