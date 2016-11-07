import { render } from "react-dom";
import { Component,createClass } from "react";
//路由组件，路由路径组件，监听地址变化组件，
import { Router,Route,hashHistory,IndexRoute,Link } from "react-router";
import { Layout } from "./layout";
import { CataContent } from "./page/catacontent";
import { CataList } from "./page/catalist";

const auto = createClass({
  render : function(){
    return <div>点击左边的分类</div>;
  }
})

class Header extends Component{
	render(){
		return (
			<div className="title">
				<span className="return">&lt;</span>
				<h1>洛书</h1>
			</div>
		)
	}
}

//给属性赋值，绑定多次会被覆盖
window.onload = function(){
  //当路由定义为一个子路由时，（路由嵌套）
  //触发的是父集的组件，子路由
  render(
    <Router history={ hashHistory }>
      <Route path="/" component={ Layout }>
        <IndexRoute component={ auto } />
        <Route path="/cata/content/:id" component={ CataContent } />
      </Route>
    </Router>,
    document.getElementById("app")
  );
  render(
  	<Header />,
    document.getElementById("header")
  )
}

//添加方法，添加多个不会被覆盖，触发时会依次执行
//window.addEventListener("load",function(){})
