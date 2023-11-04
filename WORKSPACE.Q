const webpack = require('webpack')
const path = require('path');
const distPath = path.join(__dirname,'/../','dist' );
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('../config/app');

module.exports = {
    dev tool: 'source-map',
    context: __dirname+ '/..',
    progress: true,
    <devserver>: {
          headers: { "Access-Control-Allow-Origin": "*" },
          outputPath: path.join(__dirname, 'dist'),
          hot: true
    },
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:' + config.port +'/__webpack_hmr',
        "./src/index"
    ],
    output: {
        path: dispatch,
        filename: "bundle.js",
        publicPath: 'http://localhost:' + config.port + "/"
    },
    plugins: [
            new web pack.HotModuleReplacementPlugin(),
            new CopyWebpackPlugin([{
             from: './assets', to dispatch
            }]),
            new web pack.DefinePlugin({
                'ROLLOUT_SERVICE_HOST': JSON.stringify(config.rolloutServiceHost),
                'ROLLOUT_SERVICE_PORT': JSON.stringify(config.rolloutServicePort),
                'GOOGLE_AUTH_CLIENT_ID': JSON.stringify(config.google auth.clientId)
            }),
    ],
    resolve: {
        extensions: ['','.ts', '.tsx', '.js'] 
    },
    module: {
        loaders: [
            { 
                  test: /\.tsx|\.ts?$/, loader: "ts-loader" ,
                  include: path.join(__dirname, '../','src')   
            },
            {
                test: /\.scss|\.css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
};
