'use strict';
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-simple-vars'),
    require('postcss-preset-env')({ stage: 0 }),
    require('cssnano'),
  ],
};
