import type { ESLintConfig } from '../types/ESLintConfig.type';

export type NeatlintOptions = {
  disabled?: boolean;

  ignores?: ESLintConfig['ignores'];

  javascript?: {
    files?: ESLintConfig['files'];
    languageOptions?: ESLintConfig['languageOptions'];
    plugins?: ESLintConfig['plugins'];

    rules?: ESLintConfig['rules'];
  };

  typescript?: {
    files?: ESLintConfig['files'];
    languageOptions?: ESLintConfig['languageOptions'];
    plugins?: ESLintConfig['plugins'];

    rules?: ESLintConfig['rules'];
  };

  config?: ESLintConfig[];
};
