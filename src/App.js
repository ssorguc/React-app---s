import React, { Component } from "react";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    currentUser: {}
  };

  render() {
    return (
      <React.Fragment>
        <NavBar user={currentUser} />
      </React.Fragment>
    );
  }
}

export default App;
