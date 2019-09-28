import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";
import fetchAllPost from "./watchStore";

class CartStore {
  carts = [];
  itemInCart = [];
  history = [];
  loadingHistory = true;
  loading = true;
  query = "";
  total = null;
  //   quantity = 1;

  // fetchBooks = async () => {
  //   try {
  //     const res = await instance.get("list/cart/");
  //     this.carts = res.data;
  //     this.loading = false;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // get filteredCarts() {
  //   return this.carts.filter(
  //     cart =>
  //       cart.name.toLowerCase().includes(this.query.toLowerCase()) ||
  //       item.manufacture_year.toLowerCase().includes(this.query.toLowerCase())
  //   );
  // }

  addItemToCart = async watch => {
    try {
      const res = await instance.post(`create/cart/${watch.id}/`);
      let cartObj = res.data;
      console.log("[cartStore.js cartObj: ]", cartObj);
      this.total = watch.total;
      this.carts.push(cartObj);
      this.loading = false;
      this.statusMessage = "Success";
      console.log(data);
      console.log(watch.total);
    } catch (error) {
      this.statusMessage = error.response;
    }
  };

  removeItemFromCart = item => {
    this.carts = this.carts.filter(cartItem => cartItem !== item);
  };

  checkOutCart = async () => {
    //watch status is set to false in the backend

    this.carts = [];
    await instance.get("checkout/");
    fetchAllPost();
  };
  getHistoryOrder = async userId => {
    try {
      const res = await instance.get("history/");
      const data = res.data;
      console.log("[cartStore.js] data: ", data);
      this.history = data;
      // this.history = this.carts.filter(
      //   userCart => userCart.user === userId && userCart.status === true
      // );
      this.loadingHistory = false;
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(CartStore, {
  carts: observable,
  Item: observable,
  total: observable,
  loading: observable,
  loadingHistory: observable,
  cart: observable,
  history: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action
});

const cartStore = new CartStore();
export default cartStore;
