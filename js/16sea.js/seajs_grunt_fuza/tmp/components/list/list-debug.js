define("MOD_ROOT/list/list-debug", [ "MOD_ROOT/login/login-debug" ], function(require, exports, module) {
    var login = require("MOD_ROOT/login/login-debug");
    function init() {
        console.log("I'm list");
        console.log(login);
    }
    module.exports.__id = "list";
    module.exports.init = init;
});
