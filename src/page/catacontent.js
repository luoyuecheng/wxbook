import { Component } from "react";

class CataContent extends Component{
  constructor(){
    super();//执行Component构造器方法
    //默认值
    this.state = {
      list : []
    }
  }
  //声明周期，当 dom 元素插入到页面后触发
  componentDidMount(){
    let { location } = this.props;
    //console.log('..',this.props);
    let { query } =  location;
      console.log(1,query);
    const that = this;
    $.get("/cata/content",query,function(res){
        console.log(3,res);
      if(res.reason == "Success"){
        that.setState({
          "list" : res.result.data
        });
      }
    },"json")
  }
  render(){
    let html = (
      <ul>
        {
          this.state.list.map((item,i)=>{
            return(
              <li key={ `content-${i}` }>
                <img src={ item.img } />
                <p>{ item.catalog }</p>
                <p>{ item.bytime }</p>
              </li>
            );
          })
        }
      </ul>
    )
    console.log(2,html)
    return html;
  }
}

export { CataContent };
