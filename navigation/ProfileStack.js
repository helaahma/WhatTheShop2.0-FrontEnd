import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile";
import Login from "../components/Login";
import Registration from "../components/Registration";

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    Register: Registration
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
