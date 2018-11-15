const path = require('path');

const ROOT_PATH = path.join(__dirname, '..');

module.exports = {
  rootPath: ROOT_PATH,
  ocap: {
    baseUrl: 'https://ocap.arcblock.io/api',
    // USE CORRECT TOKEN HERE
    accessKey: '2b5eded2-33e8-48cd-9b16-6deefb0eaf8b',
    accessSecret: '5e00dd99e1a65c61bd501372899719d7ceeb6581e62e21daf4ec8bb4794cc7a3',
  },
};
