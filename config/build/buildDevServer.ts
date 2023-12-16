import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => ({
  port: options.port,
  open: {
    app: 'Google Chrome',
  },
  historyApiFallback: true,
  hot: true,
});
