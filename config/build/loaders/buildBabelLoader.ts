import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean
}

export const buildBabelLoader = (props: BuildBabelLoaderProps) => {
  const { isDev, isTsx = false } = props;

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', {
            nsSeparator: '~',
            locales: ['ru', 'en'],
            keyAsDefaultValue: ['ru_RU'],
          }],
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isTsx && [
            babelRemovePropsPlugin,
            { props: ['data-testid'] },
          ],
        ].filter(Boolean),
      },

    },
  };
};
