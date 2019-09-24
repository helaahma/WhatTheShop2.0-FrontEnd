import React from "react";
import { Icon } from "native-base";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../components/Cart/cartScreen";

const CartStack = createStackNavigator({
  Cart: CartScreen
});

export default CartStack;
