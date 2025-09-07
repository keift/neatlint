import TSESLint from "typescript-eslint"
import _ from "lodash";

import { NeatlintOptionsDefault } from "../defaults/NeatlintOptions.default";

import type { NeatlintOptions } from "../types/NeatlintOptions.type";

export const Neatlint = (options: NeatlintOptions = NeatlintOptionsDefault): object => {
  options = _.merge({}, NeatlintOptionsDefault, options);

  return [
    { ignores: options.ignores },

    ...TSESLint.configs.strict,

    {
      files: options.typescript_eslint.files,
      languageOptions: options.typescript_eslint.languageOptions,
      plugins: options.typescript_eslint.plugins,
      rules: options.typescript_eslint.rules
    },

    {
      files: options.eslint.files,
      languageOptions: options.eslint.languageOptions,
      plugins: options.eslint.plugins,
      rules: options.eslint.rules
    }
  ];
};
