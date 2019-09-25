import axios from "axios";
import { decorate, observable, action, computed } from "mobx";
import { instance } from "./authStore";

class CartStore {
  carts = [];
  itemInCart = [];
  history = [];
  loadingHistory = true;
  loading = true;
  query = "";
  total = null;
  //   quantity = 1;

  fetchBooks = async () => {
    try {
      const res = await instance.get("list/cart/");
      this.carts = res.data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  get filteredCarts() {
    return this.carts.filter(
      cart =>
        cart.name.toLowerCase().includes(this.query.toLowerCase()) ||
        item.manufacture_year.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  addItemToCart = async watch => {
    const foundItem = this.carts.find(cartItem => cartItem.id == watch.id);

    if (!foundItem) {
      try {
        const res = await instance.post(`create/cart/${watch.id}/`);
        this.carts = res.data;
        this.total = watch.total;
        this.carts.push(carts);
        this.loading = false;
        this.statusMessage = "Success";
        console.log(data);
        console.log(watch.total);
      } catch (error) {
        this.statusMessage = error.response;
      }
    } else {
      //set timeout
      alert("The selected watch is already in cart.");
    }
  };

  removeItemFromCart(item) {
    this.carts = this.carts.filter(cartItem => cartItem !== item);
  }

  checkOutCart() {
    //watch status is set to false in the backend
    this.carts = [];
  }
  getHistoryOrder = async userId => {
    try {
      const res = await instance.get("history/");
      const data = res.data;
      this.carts = data;

      this.history = this.carts.filter(
        userCart => userCart.user === userId && userCart.status === true
      );
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
  checkoutCart: action,
  filteredCarts: computed
});

const cartStore = new CartStore();
export default cartStore;
