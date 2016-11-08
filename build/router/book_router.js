"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _book = require("./../controller/book");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var books = new _book.Books();

var Main = function () {
  function Main(app) {
    (0, _classCallCheck3.default)(this, Main);

    app.get("/cata/list", this.CataList);
    app.get("/cata/content", this.CataContent);
  }

  (0, _createClass3.default)(Main, [{
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
      var _req$query = req.query,
          id = _req$query.id,
          _req$query$pn = _req$query.pn,
          pn = _req$query$pn === undefined ? 0 : _req$query$pn,
          _req$query$rn = _req$query.rn,
          rn = _req$query$rn === undefined ? 30 : _req$query$rn;
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