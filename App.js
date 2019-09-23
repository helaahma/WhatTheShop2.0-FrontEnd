import AppContainer from "./navigation";

import React, { Component } from "react";
import { Spinner } from "native-base";

export default class App extends Component {
  state = {
    loading: false
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return <AppContainer />;
  }
}
