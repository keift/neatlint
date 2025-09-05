import TSEslint from "typescript-eslint";

import type { NeatlintOptions } from "../types/NeatlintOptions.type";

export const NeatlintOptionsDefault: NeatlintOptions = {
  ignores: ["./dist/**"],
  files: ["**/*.ts"],
  languageOptions: {
    parser: TSEslint.parser,
    parserOptions: {
      project: "./tsconfig.json",
      sourceType: "module"
    }
  },
  plugins: {},
  rules: {
    "arrow-body-style": "error", // Ensure arrow functions use braces consistently for readability and maintainability.
    "comma-dangle": "error", // Prevent or enforce trailing commas to keep version control diffs cleaner.
    "func-style": ["error", "expression", { allowArrowFunctions: true }], // Encourage consistent function declaration style, improving readability.
    "no-duplicate-imports": "error", // Avoid importing the same module multiple times to reduce redundancy.
    "no-empty": "error", // Prevent empty blocks that may indicate unfinished code or logical errors.
    "no-multi-spaces": "error", // Disallow unnecessary multiple spaces to keep code clean and aligned.
    "no-multiple-empty-lines": ["error", { max: 1 }], // Limit consecutive empty lines to improve code readability.
    "no-restricted-syntax": ["error", "SwitchStatement"], // Prevent specific syntax constructs that may introduce complexity or bugs.
    "no-trailing-spaces": "error", // Remove unnecessary trailing whitespace for cleaner code.
    "no-useless-catch": "error", // Disallow catch blocks that only rethrow, to reduce redundant code.
    "no-useless-constructor": "error", // Prevent empty or redundant constructors that serve no purpose.
    "no-useless-rename": "error", // Avoid renaming imports/exports to the same name for clarity and simplicity.
    "no-useless-return": "error", // Prevent return statements that have no effect, simplifying control flow.
    "no-var": "error", // Enforce modern variable declarations using let/const for block scoping.
    "object-shorthand": "error", // Encourage concise syntax for object properties and methods.
    "prefer-arrow-callback": "error", // Promote arrow functions for callbacks to maintain lexical this context.
    "prefer-const": "error", // Encourage using const for variables that are never reassigned, improving clarity.
    "prefer-template": "error", // Use template literals for string concatenation for better readability.
    "quote-props": ["error", "as-needed"], // Only quote object keys when necessary to reduce visual clutter.
    eqeqeq: "error", // Require strict equality (===) to avoid type-coercion bugs.
    indent: ["error", 2], // Enforce consistent 2-space indentation for readability.
    quotes: ["error", "double"], // Enforce double quotes for consistent string formatting.

    "@typescript-eslint/consistent-type-definitions": ["error", "type"], // Encourage consistent usage of type aliases over interfaces where chosen.
    "@typescript-eslint/consistent-type-exports": "error", // Ensure type exports are handled consistently for clarity.
    "@typescript-eslint/consistent-type-imports": "error", // Keep type imports consistent to improve readability and maintainability.
    "@typescript-eslint/explicit-function-return-type": "error", // Force explicit return types to make function behavior clear.
    "@typescript-eslint/explicit-member-accessibility": "error", // Make class member visibility explicit to improve readability and design clarity.
    "@typescript-eslint/prefer-readonly": "error", // Encourage marking private members as readonly to avoid accidental mutation.
    "@typescript-eslint/strict-boolean-expressions": "error", // Prevent ambiguous boolean usage, making conditions safer and clearer.
    "@typescript-eslint/typedef": [
      "error",
      {
        arrayDestructuring: true, // Require explicit types for destructured arrays for clarity.
        arrowParameter: true, // Force type annotations on arrow function parameters for readability.
        memberVariableDeclaration: true, // Require explicit types for class members to improve maintainability.
        objectDestructuring: true, // Require explicit types for destructured objects to prevent errors.
        parameter: true, // Ensure function/method parameters have explicit types for clarity.
        propertyDeclaration: true, // Require types on properties in interfaces/types to avoid implicit any.
        variableDeclaration: true, // Enforce explicit types on variables to increase code safety.
        variableDeclarationIgnoreFunction: true // Allow ignoring function expressions but require other variables to have types.
      }
    ]
  }
};
