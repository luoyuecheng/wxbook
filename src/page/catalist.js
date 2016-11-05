//图书分类

import { Component,Children } from "react";
import { Link } from "react-router";

//Component
class CataList extends Component{
  constructor(){
    super();//调用父类的构造器
    //默认值
    this.state = {
      list : []
    }
  }
  //生命周期，当dom元素插入到页面后触发
  componentDidMount(){
    const that = this;
//  setTimeout(function(){
//    that.setState({
//      list : [{"name":"luoyuecheng"},{"age":"17"}]
//    })
//  },2000);
    $.get("/cata/list",{},function(res){
      //console.log(res);
      if(res.reason == "success"){
        that.setState({
          "list" : res.result
        })
      }
    },"json");
  }
  render(){

    let html = (<ul>
      {
        this.state.list.map((item,i)=>{
          let to = {
            pathname : `/cata/content/${item.id}`,
            id : item.id
          }
          return (
            <li key={ `li-${i}` } data-id={ item.id }>
              <Link to={ to } > { item.catalog } </Link>
            </li>
          )
        })
      }
    </ul>);

    return html;
  }
}


//export CataList;
export { CataList };
