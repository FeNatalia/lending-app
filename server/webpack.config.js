const { DefinePlugin } = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv(),
    new DefinePlugin({
      API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
    }),
  ],
};
