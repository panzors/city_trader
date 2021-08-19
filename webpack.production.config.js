const path = require('path');

module.exports = {
  watch: false,
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
