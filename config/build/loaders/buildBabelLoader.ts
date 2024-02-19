import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export const buildBabelLoader = (props: BuildBabelLoaderProps) => {
  const { isDev, isTsx = false } = props;
  const isProd = !isDev;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx &&
            isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
        ].filter(Boolean),
      },
    },
  };
};
