import axios from "axios";
import { decorate, observable, action, computed } from "mobx";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class WatchStore {
  watches = [];
  loading = true;
  query = "";

  fetchAllPost = async () => {
    try {
      const res = await instance.get("api/list/");
      const watches = res.data;
      this.watches = watches;
      this.loading = false;
      //   console.log(this.posts[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  get filteredWatches() {
    return this.watches.filter(
      watch =>
        watch.name.toLowerCase().includes(this.query.toLowerCase()) ||
        item.description.toLowerCase().includes(this.query.toLowerCase())
    );
  }
  getWatch = watchId => {
    // console.log("testttt", itemId);
    // console.log("yyyyyyyyy", this.items);
    return this.watches.find(watchIn => +watchIn.id === +watchId);
  };
}

decorate(ItemStore, {
  watches: observable,
  loading: observable,
  query: observable,
  filteredWatches: computed
});

const watchStore = new WatchStore();
watchStore.fetchAllPost();
export default watchStore;
