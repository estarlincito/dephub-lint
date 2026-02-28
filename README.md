# @dephub/copyright ©

> Tiny utility to generate dynamic copyright notice strings based on the build year.

[![NPM version](https://img.shields.io/npm/v/@dephub/copyright.svg?style=flat)](https://npmjs.org/package/@dephub/copyright)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 📅 Automatically detects the current year
- 🔁 Generates a single year or a year range
- 🚫 Validates that the build year is not in the future
- 🧩 Tiny, dependency-free utility
- 🌳 Tree-shakeable ESM-only package

---

## Installation 📦

- npm: `npm install @dephub/copyright`
- pnpm: `pnpm add @dephub/copyright`
- yarn: `yarn add @dephub/copyright`
- bun: `bun add @dephub/copyright`

---

## Usage 🎯

### CLI 💻

Not available.

### API 🧩

```ts
import { copyright } from '@dephub/copyright';

// If current year is 2026
copyright(2020);
// → "Copyright © 2020–2026"

copyright(2026);
// → "Copyright © 2026"

// Throws if build year is in the future
copyright(2030);
// Error: buildYear (2030) cannot be greater than the current year (2026).
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
