import TSESLint from 'typescript-eslint';
import ESLintJS from '@eslint/js';

import type { ESLintConfig } from '../types/ESLintConfig.type';
import type { NeatlintOptions } from '../types/NeatlintOptions.type';

export const javascript_rules: { configs: ESLintConfig['rules']; custom: ESLintConfig['rules'] } = {
  configs: {
    ...ESLintJS.configs.recommended.rules,

    ...(Object.assign(
      {},
      ...TSESLint.configs.strictTypeChecked.map((item) =>
        Object.fromEntries(
          Object.entries(item.rules ?? {})
            .filter(([key]) => !key.startsWith('@typescript-eslint'))
            .map(([key]) => [key, 'error'])
        )
      )
    ) as ESLintConfig['rules']),

    ...(Object.assign(
      {},
      ...TSESLint.configs.stylisticTypeChecked.map((item) =>
        Object.fromEntries(
          Object.entries(item.rules ?? {})
            .filter(([key]) => !key.startsWith('@typescript-eslint'))
            .map(([key]) => [key, 'error'])
        )
      )
    ) as ESLintConfig['rules']),

    ...TSESLint.configs.eslintRecommended.rules
  },

  custom: {
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-object-constructor': 'error',
    'no-restricted-syntax': ['error', "CallExpression[callee.name='String']", "CallExpression[callee.name='Boolean']", "CallExpression[callee.name='parseFloat']", "CallExpression[callee.property.name='forEach']", 'DebuggerStatement', 'EmptyStatement', 'ForInStatement', 'LabeledStatement', 'SequenceExpression', 'SwitchStatement', 'WithStatement'],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    eqeqeq: 'error'
  }
};

export const typescript_rules: { configs: ESLintConfig['rules']; custom: ESLintConfig['rules'] } = {
  configs: {
    ...(Object.assign({}, ...TSESLint.configs.strictTypeChecked.map((item) => item.rules ?? {})) as ESLintConfig['rules']),

    ...(Object.assign({}, ...TSESLint.configs.stylisticTypeChecked.map((item) => item.rules ?? {})) as ESLintConfig['rules'])
  },

  custom: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/prefer-readonly': 'error'
  }
};

export const NeatlintOptionsDefault: NeatlintOptions = {
  disabled: false,

  ignores: ['./dist/**'],

  javascript: {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    languageOptions: {},
    plugins: {},

    rules: {
      ...javascript_rules.configs,
      ...javascript_rules.custom
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
      ...typescript_rules.configs,
      ...typescript_rules.custom
    }
  }
};
