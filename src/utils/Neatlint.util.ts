import _ from "lodash";

import { NeatlintOptionsDefault } from "../defaults/NeatlintOptions.default";

import type { NeatlintOptions } from "../types/NeatlintOptions.type";

export const Neatlint = (options: NeatlintOptions = NeatlintOptionsDefault): object => {
  options = _.merge({}, NeatlintOptionsDefault, options);

  return [
    { ignores: options.ignores },

    {
      files: options.javascript?.files,
      languageOptions: options.javascript?.languageOptions,
      plugins: options.javascript?.plugins,
      rules: options.javascript?.rules
    },

    {
      files: options.typescript?.files,
      languageOptions: options.typescript?.languageOptions,
      plugins: options.typescript?.plugins,
      rules: options.typescript?.rules
    },

    ...(options.config && options.config.length !== 0 ? options.config : [])
  ];
};
