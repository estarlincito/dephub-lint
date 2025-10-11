#!/usr/bin/env node

import { tmpdir } from 'node:os';

import { FileCache } from '@dephub/cache';
import { packageChecker } from '@dephub/package-check';
import { askInstall } from '@dephub/package-install';

export const resolvePeer = async (name: string) => {
  const cache = new FileCache({ directory: tmpdir(), name: 'lint-cache.json' });
  const cacheKey = `${process.cwd()}:${name}Installed`;

  if (!(await cache.has(cacheKey))) {
    const installed = await packageChecker.check(name, {
      rootOnly: true,
    });

    if (!installed) {
      const { success } = await askInstall(name, 'dev');
      if (success) await cache.set(cacheKey, true);
    } else {
      await cache.set(cacheKey, true);
    }
  }
};
