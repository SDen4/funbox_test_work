const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const babel = require('babel-polyfill');


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: "assets/"
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));


module.exports = {

    externals: {
        paths: PATHS
    },

    entry: {
        // app: PATHS.src
        "app": ['babel-polyfill', PATHS.src]
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: ""
    },
    module: {
        rules: [{
            test: /\.pug$/,
            oneOf: [{
                resourceQuery: /^\?vue/,
                use: ["pug-plain-loader"]
            }, {
                use: ['html-loader', 'pug-html-loader']
            }]
        },{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: "/node_modules/"
        },{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        "@babel/plugin-transform-react-jsx",
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader",
            options: {
                name: "[name].[ext]"
            }
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            issuer: /\.css$/,
            loader: "file-loader",
            options: {
                name: "[name].[ext]"
            }
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js}`}}
                },
                {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }
            ],
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                },
                {
                    loader: "postcss-loader",
                    options: {sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js}`}}
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/images`, to: `${PATHS.assets}images`},
            {from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`},
            {from: `${PATHS.src}/static`, to: ""}

        ]),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        }))
    ]
}