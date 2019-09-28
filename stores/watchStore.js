import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";

class WatchStore {
  watches = [];
  loading = true;
  query = "";
  availability = true;

  addWatch = async watch_obj => {
    try {
      await instance.post("create/", watch_obj);
      console.log("watch_obj", watch_obj);
      watchStore.fetchAllPost();
      navigation.navigate("Profile");
    } catch (error) {
      console.log("something went wrong adding the watch", error.Date);
    }
  };
  fetchAllPost = async () => {
    try {
      const res = await instance.get("list/");
      const watches = res.data;
      this.watches = watches;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  get filteredWatches() {
    return this.watches.filter(
      watch =>
        watch.availability &&
        (watch.model_name.toLowerCase().includes(this.query.toLowerCase()) ||
          watch.brand.toLowerCase().includes(this.query.toLowerCase()))
    );
  }
  getWatch = watchId => {
    return this.watches.find(watchIn => +watchIn.id === +watchId);
  };
  handleUpdate = async watch => {
    try {
      const res = await instance.get(`update/${watch.id}`);
      const watch = res.data;
      watch.availability = !watch.availability;
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(WatchStore, {
  watches: observable,
  loading: observable,
  query: observable,
  availability: observable,
  filteredWatches: computed
});

const watchStore = new WatchStore();
watchStore.fetchAllPost();
export default watchStore;
