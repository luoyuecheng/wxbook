//
var mongodb = require("mongodb");

var server_options = {
	'auto_reconnect': false,
	// 连接池
	poolSize: 10
};
var db_options = {
	w: -1
};
var mongoserver = new mongodb.Server('127.0.0.1', 27017, server_options);
// 进入到数据库
var db = new mongodb.Db('test', mongoserver, db_options);

// 打开数据库
db.open(function(error, dbserver){
	if(error){
		return false;
	}
	// 打开数据库下的一个表
	var foo = dbserver.collection("foo");

	var data = {
		"name" : "luoyuecheng",
		"age" : "17",
		"denger" : "man"
	}

	//添加数据
	/*foo.save(data, function(e, result){
		console.log(result);
	})*/

	//添加数据
	/*foo.save(data, function(e, result){
		console.log(result);
	})*/
	//使用install 添加数据时，遇到 id 相同的数据，save 会执行 uodate 命令，修改该主键的数据

	// 查询所有
	foo.find().toArray(function(e, result){
		console.log(result);
	})

	// 只查询 name 的数据
	/*foo.find({
		"name" : "luoyuecheng",
	}).toArray(function(e, result){
		console.log(result);
		// 关掉数据库
		db.close();
	})*/

	/*var oldData = {
		"name" : "luoyuecheng"
	}

	var newData = {
		"name" : "luoyuecheng",
		"age" : "17",
		"denger" : "man"
	}

	// 修改所有 updata 的数据
	foo.update(oldData, newData, function(e, result){
		console.log(result);
		db.close();
	})*/

	//删除所有 name 的数据
	/*foo.remove({
		"name" : "luoyuecheng"
	},function(e, result){
		console.log(result);
		db.close();
	})*/

})
