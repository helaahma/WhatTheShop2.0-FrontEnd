import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import profileStore from "./profileStore";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      user_obj = jwt_decode(token);
      this.user = user_obj;
      profileStore.retraiveUserProfile(user_obj);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };
  register = async (userData, navigation) => {
    try {
      const res = await instance.post("api/register/", userData);
      const data = res.data;
      this.setUser(data.access);
      navigation.replace("Main");
    } catch (err) {
      console.error(err);
    }
  };
  login = async (userData, navigation) => {
    try {
      const res = await instance.post("/api/login/", userData);
      const user = res.data;
      console.log("[authStore.js] user: ", user);
      this.setUser(user.access);
      navigation.replace("Profile");
    } catch (err) {
      console.log("something went wrong logging in");
    }
  };

  logout = () => {
    this.setUser();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
