import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'evolution',
  exposes: {
    './Routes': 'apps/evolution/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
