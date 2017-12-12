"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
/**
 * [constructor description]
 * @method constructor
 * @param  {string}    name [description]
 * @return {[type]}    [description]
 */
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(name) {
        var _this = _super.call(this, name) || this;
        _this.getName = function () {
            return _this.name;
        };
        _this.setName = function (name) {
            _this.name = name;
        };
        return _this;
    }
    return Male;
}(Person_1.Person));
exports.Male = Male;
