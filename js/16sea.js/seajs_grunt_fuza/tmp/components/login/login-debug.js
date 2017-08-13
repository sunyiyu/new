define("MOD_ROOT/login/login-debug", [ "jquery-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    function init() {
        console.log("I'm login");
        console.log($("body"));
        console.log($);
    }
    module.exports.__id = "login";
    module.exports.init = init;
});
