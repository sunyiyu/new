/**
 * Created by user on 2017/8/6.
 */
define(function(require, exports, module) {
    var util = require('./util');
    var $ = require('./jquery');

    var num = util.randomNumber(3,109);
    console.log(num);
    console.log($);

    //require.async('./util', function(util) {
    //    util.randomNumber(3,109);
    //});
    //async异步操作，所有运行完，才去执行回调函数；


    //AMD依赖前置；
    //CMD动态依赖；
    //改造就是将AMD改为CMD，例如jquery中查找amd 替换成cmd；就可直接require进来；
});