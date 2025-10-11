#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { cli } from '@dephub/cli';
import { spawnStream } from '@dephub/spawn';
import { spinner } from '@dephub/spinner';

import { resolvePeer } from './utils/peer.js';
import { description, name, version } from './utils/pkg.js';

cli
  .name(name.split('/')[1] ?? 'lint')
  .version(version)
  .description(description)
  .action(async () => {
    await resolvePeer('eslint');

    const getConfigPath = () =>
      ['lint.config.mjs']
        .map((f) => path.resolve(process.cwd(), f))
        .find((f) => fs.existsSync(f));

    const args = process.argv.slice(2);
    const configPath = getConfigPath();
    if (configPath) {
      args.unshift('--config', configPath);
    }
    spinner.start('Linting');
    await spawnStream('eslint', args);
    spinner.stop('success', undefined, true);
  });

await cli.run();
