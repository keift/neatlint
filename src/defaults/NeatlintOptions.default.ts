import TSESLint from "typescript-eslint";

import type { NeatlintOptions } from "../types/NeatlintOptions.type";

export const NeatlintOptionsDefault: NeatlintOptions = {
  ignores: ["./dist/**"],

  typescript_eslint: {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: TSESLint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      }
    },
    plugins: {},

    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/strict-boolean-expressions": "error"
    }
  },

  eslint: {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mjs", "**/*.cjs"],
    languageOptions: {},
    plugins: {},

    rules: {
      "arrow-body-style": "error",
      "func-style": ["error", "expression", { allowArrowFunctions: true }],
      "no-duplicate-imports": "error",
      "no-empty": "error",
      "no-restricted-syntax": ["error", "SwitchStatement"],
      "no-useless-backreference": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
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

