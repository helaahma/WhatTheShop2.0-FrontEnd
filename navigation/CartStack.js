import { createStackNavigator } from "react-navigation-stack";

// Components
import CartScreen from "../components/Cart";

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default CartStack;
