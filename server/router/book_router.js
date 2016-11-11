import { Books } from "./../controller/book";
const books = new Books();
import { mongo } from "./../controller/mongo"

class Main{
  constructor(app){
    app.get("/cata/list", this.CataList);
    app.get("/cata/content", this.CataContent);
    app.post("/add/cata/type",this.addCataType)
  }
  //添加图书分类
  addCataType(req, res){
  	function getdata() {
			//get 形式数据
      let { query = {}, body = {}, params = {} } = req;
      return Object.assign({},query,params,body);
    }
  	let data = getdata();
  	mongo().then(function(db){
  		//打开数据库下的一个表
  		const foo = db.collection("foo");
  		//向表中添加数据
  		foo.save(data, function(error){
  			db.close();
  			if(error){
  				res.send({
  					"success" : false,
  					"message" : "数据添加失败"
  				});
  			}else{
  				res.send({
  					"success" : true,
  					"message" : "数据添加成功"
  				});
  			}
  		})
  	})
  }
  CataList(req,res){
    function callback(error, data){
      res.send(data);
    }
    books.getCatalog(callback);
  }
  CataContent(req,res){
    //req.query 地址栏中的 get 形参
    console.log(res)
    let { id,pn=0,rn=30 } = req.query;
    //console.log(req.query);
    function callback(error,data){
      res.send(data);
    }
    books.getBookContent({
      "catalog_id" : id,
      "pn" : pn,
      "rn" : rn
    },callback);
  }
}

export { Main };
