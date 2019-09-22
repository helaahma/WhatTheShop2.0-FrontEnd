import React, { Component } from "react";
import WatchList from "./watchList";

class MainScreen extends Component {
  render() {
    return <WatchList navigation={this.props.navigation} />;
  }
}

export default MainScreen;
