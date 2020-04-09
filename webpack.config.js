const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
