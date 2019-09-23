import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegistrationScreen from "../components/Registration";
import EditProfile from "../components/Profile/editProfile";
import Address from "../components/Address/Address";
import EditAddress from "../components/Address/EditAddress";
import ViewAddress from "../components/Address/ViewAddress";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegistrationScreen,
    EditProfile: EditProfile,
    Address: Address,
    EditAddress: EditAddress,
    ViewAddress: ViewAddress
  },
  {
    initialRouteName: "Login"
  }
);

export default ProfileStack;
