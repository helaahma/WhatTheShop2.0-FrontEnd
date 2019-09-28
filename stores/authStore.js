import { decorate, observable } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import profileStore from "./profileStore";

export const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/api/"
  baseURL: "http://192.168.8.144:8000/api/"
});

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      user_obj = jwt_decode(token);
      this.user = user_obj;
      profileStore.retrieveUserProfile(user_obj);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
  };
  register = async (userData, navigation) => {
    try {
      const res = await instance.post("register/", userData);
      const data = res.data;
      this.setUser(data.access);
      navigation.replace("Main");
    } catch (err) {
      console.error(err);
    }
  };
  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      console.log("[authStore.js] user: ", user);
      this.setUser(user.access);
      navigation.replace("Profile");
    } catch (err) {
      console.log("something went wrong logging in");
      console.log("err", err);
    }
  };

  logout = navigation => {
    this.setUser();
    navigation.replace("Login");
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
