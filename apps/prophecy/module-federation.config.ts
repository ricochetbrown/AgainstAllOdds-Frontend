import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'prophecy',
  exposes: {
    './Routes': 'apps/prophecy/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
