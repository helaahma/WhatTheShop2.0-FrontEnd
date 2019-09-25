import axios from "axios";
import { decorate, computed, observable } from "mobx";
import { instance } from "./authStore";

class ProfileStore {
  user = null;

  retraiveUserProfile = async userobj => {
    console.log(userobj);
    try {
      const res = await instance.get(`user/detail/${userobj.user_id}/`);
      const user = res.data;
      this.user = user;
    } catch (error) {
      console.log("error setting profile user", error);
    }
  };

  editProfile = async (userProfileID, userData, navigation) => {
    try {
      await instance.put(`${userProfileID}/edit/`, userData);
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
    }
  };
}
decorate(ProfileStore, {
  user: observable
});
const profileStore = new ProfileStore();

export default profileStore;
