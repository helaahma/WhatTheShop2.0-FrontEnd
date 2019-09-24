import React from "react";
import { Icon } from "native-base";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../components/Cart/cartScreen";

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
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
