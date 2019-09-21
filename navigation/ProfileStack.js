import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegistrationScreen from "../components/Registration";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegistrationScreen
  },
  {
    initialRouteName: "Login"
  }
);

export default ProfileStack;
