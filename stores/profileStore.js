import axios from "axios";
import { decorate, observable } from "mobx";
import { instance } from "./authStore";

class ProfileStore {
  profile = null;

  retrieveUserProfile = async profileobj => {
    console.log(profileobj);
    try {
      const res = await instance.get(`profile/detail/`);
      const profile = res.data;
      this.profile = profile;
    } catch (error) {
      console.log("error setting retrieve profile user", error);
    }
  };

  editProfile = async (userData, navigation) => {
    try {
      await instance.put(`profile/update/`, userData);
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
    }
  };
}
decorate(ProfileStore, {
  profile: observable
});
const profileStore = new ProfileStore();

export default profileStore;
