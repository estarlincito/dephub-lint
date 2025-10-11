# @dephub/lint 🧹

> A lightweight, ESM-only ESLint runner.

[![NPM version](https://img.shields.io/npm/v/@dephub/lint.svg?style=flat)](https://npmjs.org/package/@dephub/lint)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 🚀 Full ESLint CLI support
- 🎛 ESM-friendly, works seamlessly with modern projects
- 🔧 API available for programmatic config and linting

---

## Installation 📦

```bash
# npm
npm install @dephub/lint

# pnpm
pnpm add @dephub/lint

# yarn
yarn add @dephub/lint

# bun
bun add @dephub/lint
```

---

## Usage 🎯

### CLI 💻

```bash
# Run linting in the current project
npx @dephub/lint
# Or if installed globally
lint
```

Supports all ESLint CLI commands and options. Automatically detects `lint.config.mjs` in your project root.

### API 🧩

```ts
import { defineConfig } from '@dephub/lint';

export default defineConfig({
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
});
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
