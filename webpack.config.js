/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: {
        index: "./src/index",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /.[j|t]sx?/,
                exclude: /node_modules/,
                use: "babel-loader",
                sideEffects: true,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: /\.module/,
                                mode: "local",
                                localIdentName: "[name]-[hash:7]",
                            },
                        },
                    },
                    "postcss-loader",
                ],
            },
        ],
    },
    devtool: "source-map",
    devServer: {
        open: true,
        hot: true,
        client: {
            overlay: {
                warnings: false,
            },
        },
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
};
