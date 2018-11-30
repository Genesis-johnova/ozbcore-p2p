'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on ozbcore-p2p Module {0}'
};

module.exports = require('ozbcore-lib').errors.extend(spec);
