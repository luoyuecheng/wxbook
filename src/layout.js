import { Component,cloneElement } from "react";
import { CataList } from "./page/catalist";


class Layout extends Component{
  render(){

    const content = cloneElement(this.props.children);

    let html = (
      <div className="wrap">
        <div className="catalist">
          <CataList />
        </div>
        <div className="content">
          { content }
        </div>
      </div>
    );
    return html;
  }
}

export { Layout };
