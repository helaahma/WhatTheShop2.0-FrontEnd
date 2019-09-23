import React from "react";
import { createStackNavigator } from "react-navigation";

import MainScreen from "../components/Main";
import WatchDetail from "../components/Main/watchDetail";
import { Icon } from "native-base";

const MainStack = createStackNavigator(
  {
    Main: MainScreen,
    Detail: WatchDetail
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: ({ navigation }) => ({
      title: "The Emporium",
      headerTintColor: "#FF7E5F",
      headerTitleStyle: { fontWeight: "bold" },
      headerStyle: { backgroundColor: "#351C4D" },
      headerLeft: (
        <Icon
          name="menu"
          style={{ color: "#FF7E5F" }}
          type="MaterialCommunityIcons"
          onPress={() => navigation.openDrawer()}
        />
      )
    })
  }
);

export default MainStack;
