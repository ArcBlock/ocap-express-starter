const path = require('path');

const ROOT_PATH = path.join(__dirname, '..');

module.exports = {
  rootPath: ROOT_PATH,
  ocap: {
    baseUrl: 'https://ocap.arcblock.io/api',
    // USE CORRECT accessKey/Secret pair from https://console.arcblock.io
    accessKey: '',
    accessSecret: '',
  },
};
