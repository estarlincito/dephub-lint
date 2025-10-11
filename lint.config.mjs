import tsConfig from '@dephub/lint-ts';

import { defineConfig } from './dist/index.js';

export default defineConfig([
  ...tsConfig,
  { rules: { 'security/detect-non-literal-fs-filename': 'off' } },
]);
