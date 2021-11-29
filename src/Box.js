import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.removeBox(this.props.id);
  }

  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color,
          }}
        ></div>
        <button onClick={this.handleClick}>Delete Box</button>
      </div>
    );
  }
}

export default Box;
