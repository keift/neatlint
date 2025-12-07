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
    'no-restricted-imports': ['error', { patterns: ['node:*'] }],
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.name='String']",
        message: 'Use `.toString()` instead.'
      },
      {
        selector: "CallExpression[callee.name='Boolean']",
        message: 'Use `!!value` instead.'
      },
      {
        selector: "CallExpression[callee.name='parseFloat']",
        message: 'Use `Number()` instead.'
      },
      {
        selector: "CallExpression[callee.property.name='forEach']",
        message: 'Use `for...of` instead.'
      },
      {
        selector: "CallExpression[callee.property.name='join'][callee.object.callee.property.name='split']",
        message: 'Use `.replaceAll()` instead.'
      },
      {
        selector: "CallExpression[callee.property.name='then']",
        message: 'Use try/catch instead.'
      },
      {
        selector: "CallExpression[callee.property.name='catch']",
        message: 'Use try/catch instead.'
      },
      {
        selector: 'SwitchStatement',
        message: 'Use if/else instead.'
      },
      {
        selector: 'ForInStatement',
        message: 'Use `for...of` instead.'
      },
      {
        selector: 'EmptyStatement',
        message: 'Empty statements are unnecessary.'
      },
      {
        selector: 'DebuggerStatement',
        message: 'Debugger statements cannot be included in the production.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labeled statements reduce code readability.'
      },
      {
        selector: 'SequenceExpression',
        message: 'Sequence expressions reduce code readability.'
      },
      {
        selector: 'WithStatement',
        message: 'With statements are not considered safe.'
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
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
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error'
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
