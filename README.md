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

| Rule              | Default | Description |
| ----------------- | ------- | ----------- |
| [NeatlintOptions] | Default |             |

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
