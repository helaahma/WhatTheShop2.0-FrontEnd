import axios from "axios";
import { decorate, observable, action, computed } from "mobx";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class CartStore {
  carts = [];
  cart = null;
  itemInCart = [];
  history = [];
  loadingHistory = true;
  loading = true;
  query = "";
  total = null;
  //   quantity = 1;

  get filteredCarts() {
    return this.carts.filter(
      cart =>
        cart.name.toLowerCase().includes(this.query.toLowerCase()) ||
        item.description.toLowerCase().includes(this.query.toLowerCase())
    );
  }
  addItemToCart = async watch => {
    const foundItem = this.carts.find(
      cartItem =>
        cartItem.watch == watch.watches && cartItem.status == watch.status
    );
    try {
      const res = await instance.post(`create/cart/${watch.id}/`);
      const data = res.data;
      this.cart = data;
      this.total = watch.total;

      this.loading = false;
      console.log(data);
      console.log(watch.total);
    } catch (error) {
      console.log(error);
    }
    if (!foundItem) {
      this.carts.push(item);
    }
  };

  removeItemFromCart(item) {
    this.carts = this.carts.filter(cartItem => cartItem !== item);
  }

  checkoutCart() {
    this.carts = [];
  }
  getHistoryOrder = async userId => {
    try {
      const res = await instance.get("api/history/");
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
