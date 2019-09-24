import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { observer } from "mobx-react";

import {
  Container,
  Header,
  Fab,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Label
} from "native-base";

import cartStore from "../../stores/cartStore";
import AuthStore from "../../stores/authStore";

let total = 0;
class cartScreen extends Component {
  handleCheckout = () => {
    console.log(authStore.user);
    if (authStore.user) {
      if (cartStore.carts) {
        const cart = cartStore.cart;
        const status = true;
        cartStore.checkout(cart, status);
        cartStore.carts = [];
        alert("thank you for shopping");
      }
    } else {
      this.props.navigation.navigate("ProfileTab");
    }
  };

  render() {
    let cartItems;

    if (cartStore.carts) {
      cartItems = cartStore.carts.map(item => {
        return <CartItem key={item.id} item={item} />;
      });
    }
    return (
      <Container>
        <Content>{cartItems}</Content>
        <Fab
          Button
          direction="right"
          position="bottomRight"
          style={{ backgroundColor: "#351C4D" }}
          onPress={this.handleCheckout}
        >
          <Icon name="check-circle" type="FontAwesome" />
          <Button style={{ backgroundColor: "#o2c39a" }} />
        </Fab>
        <Label>$ {cartStore.total}</Label>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#422D56"
  },
  card: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#116466",
    backgroundColor: "#000000"
  },
  textHigligted: { color: "white" }
});

export default observer(cartScreen);
