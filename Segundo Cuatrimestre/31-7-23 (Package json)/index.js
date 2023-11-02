"use strict";
exports.__esModule = true;
var console_1 = require("console");
var rls = require('readline-sync');
function sum() {
    var a = rls.questionInt('Add a number');
    var b = rls.questionInt('Add a number');
    return (0, console_1.log)(a + b);
}
sum();
