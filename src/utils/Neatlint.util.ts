import TSEslint from "typescript-eslint";
import _ from "lodash";

import { NeatlintOptionsDefault } from "../defaults/NeatlintOptions.default";

import type { NeatlintOptions } from "../types/NeatlintOptions.type";

export const Neatlint = (options: NeatlintOptions = NeatlintOptionsDefault): object => {
  options = _.merge({}, NeatlintOptionsDefault, options);

  return [
    { ignores: ["./dist/**"] },
    ...TSEslint.configs.strict,
    {
      files: options.files,
      languageOptions: {
        parser: TSEslint.parser,
        parserOptions: {
          project: "./tsconfig.json",
          sourceType: "module"
        }
      },
      plugins: options.plugins,
      rules: options.rules
    }
  ];
};
