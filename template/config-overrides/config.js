const path = require('path');

module.exports = {
  mainfestContext: path.join(__dirname, './mainfest'),
  dll: [
    'react',
    'redux',
    'react-dom',
    'react-router',
    'react-redux',
    'react-router-redux'
  ],
  libPath: path.join(__dirname, '../public/libs')
};
