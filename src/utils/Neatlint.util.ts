import TSEslint from "typescript-eslint";
import _ from "lodash";

import { NeatlintOptionsDefault } from "../defaults/NeatlintOptions.default";

import type { NeatlintOptions } from "../types/NeatlintOptions.type";

export const Neatlint = (options: NeatlintOptions = NeatlintOptionsDefault): object => {
  options = _.merge({}, NeatlintOptionsDefault, options);

  return [
    { ignores: options.ignores },
    ...TSEslint.configs.strict,
    {
      files: options.typescript.files,
      languageOptions: options.typescript.languageOptions,
      plugins: options.typescript.plugins,
      rules: options.typescript.rules
    },
    {
      files: options.javascript.files,
      languageOptions: options.javascript.languageOptions,
      plugins: options.javascript.plugins,
      rules: options.javascript.rules
    }
  ];
};
