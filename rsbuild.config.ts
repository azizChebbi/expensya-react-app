import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginBasicSsl } from '@rsbuild/plugin-basic-ssl';

export default defineConfig({
  server: {
    port: 2000,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'react_app',
      filename: 'remoteEntry.js',
      exposes: {
        './VehiclesList': './src/components/VehiclesList.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
    pluginBasicSsl(),
  ],
});
