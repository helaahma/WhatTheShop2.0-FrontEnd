import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "native-base";
import { navigation } from "react-navigation";

import cartScreen from "../components/Cart/cartScreen";

const CartStack = createStackNavigator(
  {
    Cart: cartScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Cart",
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

export default CartStack;
