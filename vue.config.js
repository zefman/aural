module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: 'worker-loader',
            options: { inline: true }
          }
        }
      ]
    },
    output: {
      globalObject: 'this'
    }
  }
}
