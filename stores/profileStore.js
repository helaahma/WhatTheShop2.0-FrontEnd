import axios from "axios";
import { decorate, computed, observable } from "mobx";

class ProfileStore {
  user = null;

  retraiveUserProfile = async userobj => {
    console.log(userobj);
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/user/detail/${userobj.user_id}/`
      );
      const user = res.data;
      this.user = user;
    } catch (error) {
      console.log("error setting profile user", error);
    }
  };

  editProfile = async (userProfileID, userData, navigation) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/profile/${userProfileID}/edit/`,
        userData
      );
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
