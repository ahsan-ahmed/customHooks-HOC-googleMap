import React from "react";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";

class HocDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>React Higher Order Component</h1>
        <ClickCount name="Ahsan Ahmed"/>
        <HoverCount />
      </div>
    );
  }
}

export default HocDemo;
