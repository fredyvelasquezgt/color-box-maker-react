import React, { Component } from "react";
import BoxList from "./BoxList";
import "./App.css";
import Box from "./Box";

class App extends Component {
  render() {
    return (
      <div>
        <Box height={10} width={20} color="purple" />
        <Box height={10} width={20} color="purple" />

      </div>
    );
  }
}

export default App;
