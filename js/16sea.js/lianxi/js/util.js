/**
 * Created by user on 2017/8/6.
 */
define(function(require, exports, module) {
    var bbb = require('./bbb')
    var util = [];
    util.randomNumber = function (min,max) {
        return min + Math.random() * (max - min);
    }

    util.getZhiJing = function (banjing) {
        return banjing * 2 +bbb.b
    }

    util.getZhouChang = function (banjing) {
        return banjing * Math.PI * 2
    }

    module.exports = util;
});