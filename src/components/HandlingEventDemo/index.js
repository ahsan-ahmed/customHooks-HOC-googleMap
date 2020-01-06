import React from "react";

class HandlingEventDemo extends React.Component {
  handleClick(e) {
    console.log(this, "this");
    console.log(e, "handleClick");
  }
  render() {
    return (
      <div>
        <h1>React Higher Order Component</h1>
        <button onClick={this.handleClick}>button 1</button>
        <button onClick={event => this.handleClick(event)}>button 2</button>
      </div>
    );
  }
}

export default HandlingEventDemo;
