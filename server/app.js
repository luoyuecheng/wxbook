import express from "express";
const app = express();

import path from "path";
import Swig from "swig";
import request from "request";
import { Main } from "./router/book_router";
new Main(app);

//post 请求处理模块
import bodyParser from "body-parser";

//处理 post 请求，将 post 请求的数据封装为 json
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json())


Swig.setDefaults({
  cache : false //不缓存文件
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

app.get("/",(req,res)=>{
  res.render("index");
})


//设置文件后缀的解释器，配置 render 输出的文件的解释器，用什么去编译
app.engine("html",Swig.renderFile);
//设置页面的后缀，配置render 输出文件的默认后缀
app.set("view engine", "html");
//设置页面的根目录，配置 render 输出文件的根目录
app.set("views", path.join(__dirname, "../views"));

//把一个静态文件当做服务器
//可以直接从浏览器请求这个文件
//请求文件不能使用.. 需要从根目录开始查找
app.use(express.static(path.join(__dirname, "../output")))
app.use(express.static(path.join(__dirname, "../cms")))

//var server = app.listen(9010,function(){
//var host = server.address().address;
//var port = server.address().port;
//console.log("http://",host, port);
//})
app.listen(9010,function(){
  console.log("open http://127.0.0.1:9010");
});