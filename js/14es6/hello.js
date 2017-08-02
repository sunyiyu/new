/**
 * Created by user on 2017/7/30.
 */
var s = 'Hello';

function greet(name) {
    return s + ', ' + name + '!';
}

function greet2(name) {
    return 'greet' + name;
}
() => {
    return 13;
}

module.exports = {//知识点：module.exports; 记
    greet: greet,
    greet2: greet2,
    str: 'kjlkjlkjdsasad',
    arr: [1,2,3,4,5,6,7,8,9]
}

exports.greet = greet;  //知识点：不写module，的写法
exports.greet2 = greet2;
exports.str = 'kjlkjlkjdsasad';