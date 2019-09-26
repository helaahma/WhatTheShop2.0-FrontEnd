import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";

class WatchStore {
  watches = [];
  loading = true;
  query = "";

  addWatch = async watch_obj => {
    try {
      await instance.post("create/", watch_obj);
      this.watches.push(watch_obj);
      console.log("watch_obj", watch_obj);
    } catch (error) {
      console.log("something went wrong registering", error.Date);
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
          watch.brand.name.toLowerCase().includes(this.query.toLowerCase()))
    );
  }
  getWatch = watchId => {
    return this.watches.find(watchIn => +watchIn.id === +watchId);
  };
}

decorate(WatchStore, {
  watches: observable,
  loading: observable,
  query: observable,
  filteredWatches: computed
});

const watchStore = new WatchStore();
watchStore.fetchAllPost();
export default watchStore;
