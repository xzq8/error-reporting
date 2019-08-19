'use strict';

var errreport = require('./src/err-report')

/**
* @param {Object} config
*/

module.exports.init = function (cb)
{
    errreport.onerror(cb)
};

