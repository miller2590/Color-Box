import React, { Component } from "react";
import { v4 } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: v4() };
    this.props.create(newBox);
    this.setState({
      height: "",
      width: "",
      color: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Enter Height </label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            id="height"
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="width">Enter Width </label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            id="width"
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="color">Enter Color </label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            id="color"
            onChange={this.handleChange}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewBoxForm;
