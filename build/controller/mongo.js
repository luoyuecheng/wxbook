"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mongo = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _mongodb = require("mongodb");

var _mongodb2 = _interopRequireDefault(_mongodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoserver = new _mongodb2.default.Server('127.0.0.1', 27017, {
	//数据库连接失败时自动重连
	"auto_reconnect": true,
	//设置连接池数量
	"poolSize": 10
});

var db = new _mongodb2.default.Db('test', mongoserver, {
	// 关注写
	// 设置 w = -1 是 mongodb 1.2 后的强制要求
	w: -1
});

function mongo() {
	return new _promise2.default(function (resolve, reject) {
		db.open(function (err) {
			if (err) {
				reject(err);
			}
			// collection : 需要链接的库
			resolve(db);
		});
	});
}

exports.mongo = mongo;