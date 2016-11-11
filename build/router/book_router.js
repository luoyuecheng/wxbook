"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _book = require("./../controller/book");

var _mongo = require("./../controller/mongo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var books = new _book.Books();

var Main = function () {
  function Main(app) {
    (0, _classCallCheck3.default)(this, Main);

    app.get("/cata/list", this.CataList);
    app.get("/cata/content", this.CataContent);
    app.post("/add/cata/type", this.addCataType);
  }
  //添加图书分类


  (0, _createClass3.default)(Main, [{
    key: "addCataType",
    value: function addCataType(req, res) {
      function getdata() {
        //get 形式数据
        var _req$query = req.query,
            query = _req$query === undefined ? {} : _req$query,
            _req$body = req.body,
            body = _req$body === undefined ? {} : _req$body,
            _req$params = req.params,
            params = _req$params === undefined ? {} : _req$params;

        return (0, _assign2.default)({}, query, params, body);
      }
      var data = getdata();
      (0, _mongo.mongo)().then(function (db) {
        //打开数据库下的一个表
        var foo = db.collection("foo");
        //向表中添加数据
        foo.save(data, function (error) {
          db.close();
          if (error) {
            res.send({
              "success": false,
              "message": "数据添加失败"
            });
          } else {
            res.send({
              "success": true,
              "message": "数据添加成功"
            });
          }
        });
      });
    }
  }, {
    key: "CataList",
    value: function CataList(req, res) {
      function callback(error, data) {
        res.send(data);
      }
      books.getCatalog(callback);
    }
  }, {
    key: "CataContent",
    value: function CataContent(req, res) {
      //req.query 地址栏中的 get 形参
      console.log(res);
      var _req$query2 = req.query,
          id = _req$query2.id,
          _req$query2$pn = _req$query2.pn,
          pn = _req$query2$pn === undefined ? 0 : _req$query2$pn,
          _req$query2$rn = _req$query2.rn,
          rn = _req$query2$rn === undefined ? 30 : _req$query2$rn;
      //console.log(req.query);

      function callback(error, data) {
        res.send(data);
      }
      books.getBookContent({
        "catalog_id": id,
        "pn": pn,
        "rn": rn
      }, callback);
    }
  }]);
  return Main;
}();

exports.Main = Main;