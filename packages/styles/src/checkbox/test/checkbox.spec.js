const Utils = require('../../test-utils');
const u = new Utils(__dirname);

module.exports = [
  u.spec('checkbox', 'checkbox', {
    delay: 500 // They have an animation
  })
];
