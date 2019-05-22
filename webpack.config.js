const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './public'),
    assets: 'static/'
};

module.exports = (env, options) => {
    const isEnvProduction = options.mode === 'production';
    const mode = options.mode || 'development';

    return {
        entry: PATHS.src,
        mode,
        output: {
            path: PATHS.dist,
            filename: '[name].[hash:8].bundle.js',
            chunkFilename: '[name].[hash:8].bundle.js',
            publicPath: isEnvProduction ? './' : '/'
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    use: [
                        { loader: 'babel-loader' },
                        {
                            loader: 'eslint-loader',
                            options: {
                                // fix: true,
                                configFile: path.join(__dirname, '/.eslintrc'),
                                emitWarning: true
                            }
                        }
                    ],
                    exclude: /(node_modules|bower_components)/
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader: require.resolve('postcss-loader'),
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('autoprefixer'),
                                    require('css-mqpacker'),
                                    require('cssnano')({
                                        preset: [
                                            'default',
                                            {
                                                discardComments: {
                                                    removeAll: true
                                                }
                                            }
                                        ]
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {},
                        },
                    ],
                }
            ]
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: `${PATHS.assets}css/[name].css`,
                chunkFilename: '[id].css'
            }),
            new HtmlWebpackPlugin({
                title: 'Shopper',
                template: 'static/indexTemplate.html'
            }),
            new CopyPlugin([
                {
                    from: 'static/favicon.png'
                }
            ]),
            new CleanWebpackPlugin()
        ],

        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true
                        }
                    },
                    parallel: true,
                    cache: true,
                    sourceMap: !isEnvProduction
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },

        stats: {
            entrypoints: false,
            children: false
        },

        devServer: {
            open: true,
            overlay: true,
            hot: true,
            contentBase: PATHS.dist,
            compress: true,
            port: 9000,
            watchContentBase: true,
            progress: true,
            historyApiFallback: true
        },

        resolve: {
            extensions: ['.js', '.jsx']
        },

        devtool: isEnvProduction ? false : 'cheap-module-eval-source-map'
    };
};
