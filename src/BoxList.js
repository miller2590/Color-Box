import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {boxes: [{width: 20, height: 40, color: 'red'}]};
  }

  render() {
      const boxes = this.state.boxes.map(box => (
          <Box 
          width={box.width}
          height={box.height}
          color={box.color}
          />
      ))
    return (
      <div>
        <NewBoxForm />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
