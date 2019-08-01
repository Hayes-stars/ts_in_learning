const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空dist目录

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}