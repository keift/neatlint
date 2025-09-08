import TSESLint from "typescript-eslint";
import ESLintJS from "@eslint/js";

import type { NeatlintOptions } from "../types/NeatlintOptions.type";

export const NeatlintOptionsDefault: NeatlintOptions = {
  ignores: ["./dist/**"],

  typescript: {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    languageOptions: {
      parser: TSESLint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": TSESLint.plugin
    },

    rules: {
      ...Object.assign({}, ...TSESLint.configs.strictTypeChecked.map((item) => item.rules ?? {}))as Record<string, unknown>,
      ...Object.assign({}, ...TSESLint.configs.stylisticTypeChecked.map((item) => item.rules ?? {}))as Record<string, unknown>,

      "@typescript-eslint/consistent-type-definitions": ["error", "type"], // stylisticTypeChecked but different
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/no-inferrable-types": "error", // stylisticTypeChecked
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/strict-boolean-expressions": "error"
    }
  },

  javascript: {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts", "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    languageOptions: {},
    plugins: {},

    rules: {
      ...ESLintJS.configs.recommended.rules,
      "no-undef": "off",

      "arrow-body-style": "error",
      "func-style": ["error", "expression", { allowArrowFunctions: true }],
      "no-duplicate-imports": "error",
      "no-restricted-syntax": ["error", "SwitchStatement"],
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      eqeqeq: "error"
    }
  }
};
