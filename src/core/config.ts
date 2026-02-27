import {
  type Config,
  type ConfigWithExtendsArray,
  defineConfig as config,
} from '@eslint/config-helpers';

export function defineConfig(...args: ConfigWithExtendsArray): Config[] {
  return config(args);
}

export type { Config };
