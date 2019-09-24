import axios from "axios";
import { decorate, computed, observable } from "mobx";

class AddressStore {
  address = null;

  CreateAddress = async userData => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/address/create/",
        userData
      );
      const addressData = res.data;
      console.log(addressData);
      this.address = addressData;
    } catch (error) {
      console.log(error);
    }
  };
  EditAddress = async (addressID, userData) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/address/${addressID}/edit/`,
        userData
      );
    } catch (error) {
      console.log(error);
    }
  };
  DeleteAddress = async (addressID, navigation) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/address/${addressID}/delete/`);
      navigation.replace("Profile");
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(AddressStore, {
  user: observable
});

const addressStore = new AddressStore();
export default addressStore;
