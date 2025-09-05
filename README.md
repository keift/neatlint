[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined
[NeatlintOptionsDefault]: https://github.com/keift/neatlint/blob/main/src/defaults/NeatlintOptions.default.ts
[NeatlintOptions]: https://github.com/keift/neatlint/blob/main/src/types/NeatlintOptions.type.ts

<div align="center">
  <br/>
  <img src="https://i.ibb.co/KpF1K8Zq/unknown.png" width="450px"/>
  <br/>
  <br/>
  <img src="https://img.shields.io/npm/v/neatlint?label=version&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/l/neatlint?label=license&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/dt/neatlint?label=downloads&color=%2300927F"/>
  <img src="https://img.shields.io/npm/unpacked-size/neatlint?label=size&color=%2300927F"/>
</div>

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
  - [Tree](#tree)
  - [Import](#import)
  - [Methods](#methods)
  - [What does it do?](#what-does-it-do)
  - [Types](#types)
- [Links](#links)
  - [Discord](https://discord.gg/keift)
  - [Telegram](https://t.me/keiftt)
  - [Twitter](https://x.com/keiftttt)
  - [GitHub](https://github.com/keift)
- [License](#license)

## About

Strict ESLint presets for modern TypeScript projects.

## Features

- Requires types to be specified
- Requires use of arrow functions
- Requires the use of backtick
- Requires specifying read only in classes
- Requires specifying accessibility in classes
- Forbids interfaces, only types are used
- Use of `var` is prohibited and it warns against using `const` and `let` when necessary
- Unnecessary quotes are prevented on objects, requiring the use of double or single quotes
- ... and more!

## Installation

You can install it as follows.

```shell
// NPM
npm install neatlint

// PNPM
pnpm install neatlint

// Yarn
yarn add neatlint

// Bun
bun add neatlint

// Deno
deno install npm:neatlint
```

## Documentation

### Tree

Briefly as follows.

```typescript
neatlint
│
├── Neatlint(options?)
│
└── type Types
    │
    └── NeatlintOptions
```

### Import

Briefly as follows.

> TypeScript
>
> ```typescript
> // 📁 ./eslint.config.ts
> import { Neatlint, type Types as NeatlintTypes } from "neatlint";
>
> export default Neatlint();
> ```
>
> JavaScript
>
> ```javascript
> // 📁 ./eslint.config.js
> import { Neatlint } from "neatlint";
>
> export default Neatlint();
> ```

### Methods

`Neatlint(options?)`

Read file asynchronous.

> | Parameter | Default                  | Description                                        |
> | --------- | ------------------------ | -------------------------------------------------- |
> | options   | [NeatlintOptionsDefault] | [NeatlintOptions] (optional)<br/>Neatlint options. |
>
> returns [Object]
>
> Example:
>
> ```typescript
> export default Neatlint();
> ```

### What does it do?

Neatlint offers strict ESLint settings.

| Rule                                                                                                                 | Description                                                                         | Default                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)                                            | Ensure arrow functions use braces consistently for readability and maintainability. | `"error"`                                                                                                                                                                                                                                   |
| [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)                                                    | Prevent or enforce trailing commas to keep version control diffs cleaner.           | `"error"`                                                                                                                                                                                                                                   |
| [func-style](https://eslint.org/docs/latest/rules/func-style)                                                        | Encourage consistent function declaration style, improving readability.             | `["error", "expression", { allowArrowFunctions: true }]`                                                                                                                                                                                    |
| [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)                                    | Avoid importing the same module multiple times to reduce redundancy.                | `"error"`                                                                                                                                                                                                                                   |
| [no-empty](https://eslint.org/docs/latest/rules/no-empty)                                                            | Prevent empty blocks that may indicate unfinished code or logical errors.           | `"error"`                                                                                                                                                                                                                                   |
| [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)                                              | Disallow unnecessary multiple spaces to keep code clean and aligned.                | `"error"`                                                                                                                                                                                                                                   |
| [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)                              | Limit consecutive empty lines to improve code readability.                          | `["error", { max: 1 }]`                                                                                                                                                                                                                     |
| [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)                                    | Prevent specific syntax constructs that may introduce complexity or bugs.           | `["error", "SwitchStatement"]`                                                                                                                                                                                                              |
| [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)                                        | Remove unnecessary trailing whitespace for cleaner code.                            | `"error"`                                                                                                                                                                                                                                   |
| [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)                                            | Disallow catch blocks that only rethrow, to reduce redundant code.                  | `"error"`                                                                                                                                                                                                                                   |
| [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)                                | Prevent empty or redundant constructors that serve no purpose.                      | `"error"`                                                                                                                                                                                                                                   |
| [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)                                          | Avoid renaming imports/exports to the same name for clarity and simplicity.         | `"error"`                                                                                                                                                                                                                                   |
| [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)                                          | Prevent return statements that have no effect, simplifying control flow.            | `"error"`                                                                                                                                                                                                                                   |
| [no-var](https://eslint.org/docs/latest/rules/no-var)                                                                | Enforce modern variable declarations using let/const for block scoping.             | `"error"`                                                                                                                                                                                                                                   |
| [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)                                            | Encourage concise syntax for object properties and methods.                         | `"error"`                                                                                                                                                                                                                                   |
| [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)                                  | Promote arrow functions for callbacks to maintain lexical this context.             | `"error"`                                                                                                                                                                                                                                   |
| [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)                                                    | Encourage using const for variables that are never reassigned, improving clarity.   | `"error"`                                                                                                                                                                                                                                   |
| [prefer-template](https://eslint.org/docs/latest/rules/prefer-template)                                              | Use template literals for string concatenation for better readability.              | `"error"`                                                                                                                                                                                                                                   |
| [quote-props](https://eslint.org/docs/latest/rules/quote-props)                                                      | Only quote object keys when necessary to reduce visual clutter.                     | `["error", "as-needed"]`                                                                                                                                                                                                                    |
| [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)                                                                | Require strict equality (===) to avoid type-coercion bugs.                          | `"error"`                                                                                                                                                                                                                                   |
| [indent](https://eslint.org/docs/latest/rules/indent)                                                                | Enforce consistent 2-space indentation for readability.                             | `["error", 2]`                                                                                                                                                                                                                              |
| [quotes](https://eslint.org/docs/latest/rules/quotes)                                                                | Enforce double quotes for consistent string formatting.                             | `["error", "double"]`                                                                                                                                                                                                                       |
| [@typescript-eslint/consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)     | Encourage consistent usage of type aliases over interfaces where chosen.            | `["error", "type"]`                                                                                                                                                                                                                         |
| [@typescript-eslint/consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)             | Ensure type exports are handled consistently for clarity.                           | `"error"`                                                                                                                                                                                                                                   |
| [@typescript-eslint/consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)             | Keep type imports consistent to improve readability and maintainability.            | `"error"`                                                                                                                                                                                                                                   |
| [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type) | Force explicit return types to make function behavior clear.                        | `"error"`                                                                                                                                                                                                                                   |
| [@typescript-eslint/explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility) | Make class member visibility explicit to improve readability and design clarity.    | `"error"`                                                                                                                                                                                                                                   |
| [@typescript-eslint/prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)                             | Encourage marking private members as readonly to avoid accidental mutation.         | `"error"`                                                                                                                                                                                                                                   |
| [@typescript-eslint/strict-boolean-expressions](https://typescript-eslint.io/rules/strict-boolean-expressions)       | Prevent ambiguous boolean usage, making conditions safer and clearer.               | `"error"`                                                                                                                                                                                                                                   |
| [@typescript-eslint/typedef](https://typescript-eslint.io/rules/typedef)                                             | Enforces explicit type annotations everywhere, ensuring type safety and clarity.    | `["error", { arrayDestructuring: true, arrowParameter: true, memberVariableDeclaration: true, objectDestructuring: true, parameter: true, propertyDeclaration: true, variableDeclaration: true, variableDeclarationIgnoreFunction: true }]` |

### Types

| Type              |
| ----------------- |
| [NeatlintOptions] |

## Links

- [Discord](https://discord.gg/keift)
- [Telegram](https://t.me/keiftt)
- [Twitter](https://x.com/keiftttt)
- [GitHub](https://github.com/keift)

## License

MIT License

Copyright (c) 2025 Keift

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
