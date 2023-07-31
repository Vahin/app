import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const codeBabelLoader = buildBabelLoader(options);

  const tsxCodeBabelLoader = buildBabelLoader({
    ...options,
    isTsx: true,
  });

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = buildCssLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
  ];
};
