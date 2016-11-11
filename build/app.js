"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _swig = require("swig");

var _swig2 = _interopRequireDefault(_swig);

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _book_router = require("./router/book_router");

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

new _book_router.Main(app);

//post 请求处理模块


//处理 post 请求，将 post 请求的数据封装为 json
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));
app.use(_bodyParser2.default.json());

_swig2.default.setDefaults({
  cache: false //不缓存文件
});

/*app.route("/api").get((req,res)=>{
  var query = req.query;
  var url = query.url;
  delete query.url;
  request.post({
    url : url,
    formData : query
  },(error, response, data)=>{
    res.send(data);
  });
});
*/

//app.engine("html", Swig.renderFile);

//app.get("/",(req,res)=>{
////res.send("luoyuecheng");
////res.render("index");//加载一个文件，并输出到浏览器
//books.getCatalog((error, data)=>{
//  res.send(data);
//});
//books.getBookContent(option,(error,response,data)=>{
//  res.send(data);
//})
//});

app.get("/", function (req, res) {
  res.render("index");
});

//设置文件后缀的解释器，配置 render 输出的文件的解释器，用什么去编译
app.engine("html", _swig2.default.renderFile);
//设置页面的后缀，配置render 输出文件的默认后缀
app.set("view engine", "html");
//设置页面的根目录，配置 render 输出文件的根目录
app.set("views", _path2.default.join(__dirname, "../views"));

//把一个静态文件当做服务器
//可以直接从浏览器请求这个文件
//请求文件不能使用.. 需要从根目录开始查找
app.use(_express2.default.static(_path2.default.join(__dirname, "../output")));
app.use(_express2.default.static(_path2.default.join(__dirname, "../cms")));

//var server = app.listen(9010,function(){
//var host = server.address().address;
//var port = server.address().port;
//console.log("http://",host, port);
//})
app.listen(9010, function () {
  console.log("open http://127.0.0.1:9010");
});