import React from "react";
import { Icon } from "native-base";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Navigators
import ProfileStack from "./ProfileStack";
import CartStack from "./CartStack";
import MainStack from "./MainStack";

const BottomTab = createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Cart: CartStack,
    Main: MainStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Cart") {
          iconName = "shopping-cart";
          iconType = "FontAwesome";
        } else if (routeName === "Profile") {
          iconName = "id-badge";
          iconType = "FontAwesome";
        } else if (routeName === "Main") {
          iconName = "home";
          iconType = "FontAwesome";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "cornflowerblue"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default BottomTab;
