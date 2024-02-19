import { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { EnvType } from "./config/types";
import path from "path";

import { getImgMinimizer, getLoaders, getPlugins } from "./config/build";

export default (options: EnvType) => {
  const { mode, port } = options;
  const config: Configuration = {
    mode,
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash:8].js",
      clean: true,
    },
    devServer: {
      port: port ?? 5000,
      open: true,
      hot: true,
    },
    module: {
      rules: getLoaders(mode),
    },
    plugins: getPlugins({
      mode,
      html: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
    }),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    devtool: mode === "development" ? "inline-source-map" : undefined,
    optimization: {
      minimizer: getImgMinimizer(),
    },
  };

  return config;
};
