import { Books } from "./../controller/book";
const books = new Books();

class Main{
  constructor(app){
    app.get("/cata/list", this.CataList);
    app.get("/cata/content", this.CataContent);
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
