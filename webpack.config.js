const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        static: {  // Instead of contentBase, now it's named `static`
            directory: path.join(__dirname, 'dist')
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
