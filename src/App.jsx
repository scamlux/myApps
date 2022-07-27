import React, { Component } from "react";
import "./App.css";

class Tree extends Component {
  state = {
    expand: false,
  };
  setExpand() {
    this.setState({
      expand: !this.state.expand,
    });
  }
  render() {
    const { explorer } = this.props;
    return (
      <>
        <div className="wrapper">
          <button onClick={() => this.setExpand()}>{explorer.name}</button>
          <div
            style={{
              display: this.state.expand ? "inline-block" : "none",
              marginLeft: "2rem",
              
            }}
          >
            {explorer?.items.map((explore) => (
              <Tree explorer={explore} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Tree;
