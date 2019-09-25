import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import MainScreen from "../components/Main";
import WatchDetail from "../components/Main/watchDetail";
import { Icon } from "native-base";
// import { Drawer } from "react-navigation";
const MainStack = createStackNavigator(
  {
    Main: MainScreen,
    Detail: WatchDetail
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Watch U Want",
      headerTintColor: "#FF7E5F",
      headerTitleStyle: { fontWeight: "bold" },
      headerStyle: { backgroundColor: "#351C4D" }
    })
  }
);

export default MainStack;
