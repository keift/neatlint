import merge from 'lodash.merge';

import { NeatlintOptionsDefault } from '../defaults/NeatlintOptions.default';

import type { ESLintConfig } from '../types/ESLintConfig.type';
import type { NeatlintOptions } from '../types/NeatlintOptions.type';

export const Neatlint = (options: NeatlintOptions = NeatlintOptionsDefault): ESLintConfig[] => {
  options = merge({}, NeatlintOptionsDefault, options);

  if (options.append?.['no-restricted-imports'] && typeof options.js?.rules?.['no-restricted-imports'] === 'object') options.js.rules['no-restricted-imports'] = [...options.js.rules['no-restricted-imports'], ...options.append['no-restricted-imports']];
  if (options.append?.['no-restricted-syntax'] && typeof options.js?.rules?.['no-restricted-syntax'] === 'object') options.js.rules['no-restricted-syntax'] = [...options.js.rules['no-restricted-syntax'], ...options.append['no-restricted-syntax']];

  return [
    { ignores: options.ignores },

    {
      files: options.js?.files,
      languageOptions: options.js?.languageOptions,
      plugins: options.js?.plugins,
      rules: options.disabled === true ? {} : options.js?.rules
    },

    {
      files: options.ts?.files,
      languageOptions: options.ts?.languageOptions,
      plugins: options.ts?.plugins,
      rules: options.disabled === true ? {} : options.ts?.rules
    },

    ...(options.config && options.config.length !== 0 ? options.config : [])
  ];
};
