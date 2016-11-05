import { Component } from "react";

class CataContent extends Component{
  constructor(){
    super();//执行Component构造器方法
    //默认值
    this.state = {
      list : []
    }
  }
  componentDidMount(){
    let { location } = this.props;
    console.log('..',location);
    let { query } =  location;
    const that = this;
    $.get("/cata/content",query,function(res){
      //console.log(res);
      if(res.reason == "success"){
        that.setState({
          "list" : res.result.data
        })
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
    return html;
  }
}

export { CataContent };
