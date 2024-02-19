import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const getLoaders = (mode: string) => {
  const isDev = mode === "development";

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const imgLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
      filename: "img/[name].[contenthash:8][ext]",
    },
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[name].[contenthash:8][ext]",
    },
  };

  return [tsLoader, cssLoader, imgLoader, fontsLoader];
};
