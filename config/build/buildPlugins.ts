import HTMLWebpackPlugin from "html-webpack-plugin";
import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance,
} from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ];
};
