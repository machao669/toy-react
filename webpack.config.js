/*
 * @Author: machao
 * @Date: 2020-10-22 17:08:44
 * @LastEditTime: 2020-10-22 19:47:08
 * @Description: 
 * @symbol_custom_string_obkoro1: Copyright raycloud
 */
module.exports = {
  // 入口
  entry: './src/main.js',
  // 方便可读 的两个设置
  mode: 'development',
  optimization: {
    minimize: false
  },
  // loder
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 兼容新语法
            plugins: ['@babel/plugin-transform-react-jsx']
          }
        }
      }
    ]
  }
}