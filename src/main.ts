import TSEslint from "typescript-eslint";
import _ from "lodash";

import { BestlintOptionsDefault } from "./defaults/BestlintOptions.default";

import type { BestlintOptions } from "./types/BestlintOptions.type";

export const Bestlint = (options: BestlintOptions = BestlintOptionsDefault): object => {
  options = _.merge({}, BestlintOptionsDefault, options);

  return [
    { ignores: ["./dist/**"] },
    ...TSEslint.configs.strict,
    {
      files: ["**/*.ts"],
      languageOptions: {
        parser: TSEslint.parser,
        parserOptions: {
          project: "./tsconfig.json",
          sourceType: "module"
        }
      },
      plugins: {
        "@typescript-eslint": TSEslint.plugin
      },
      rules: options.rules
    }
  ];
};
