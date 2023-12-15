import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'universe',
  exposes: {
    './Routes': 'apps/universe/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
