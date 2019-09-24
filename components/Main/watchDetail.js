import React, { Component } from "react";
import { Image } from "react-native";

import {
  Container,
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

class WatchDetail extends Component {
  state = {
    quantity: 1
  };
  handleAddingToCart = () => {
    const quantity = this.state.quantity;
    if (AuthStore.user) {
      const item = this.props.navigation.getParam("watch");
      cartStore.addItemsToCart(item, quantity);
    } else {
      alert("you have to login.");
      this.props.navigation.navigate("ProfileTab");
    }
  };
  handleQuantity = () => {
    const quantity = this.state.quantity;
    if (quantity === 1) {
      this.setState({ quantity: 0 });
    } else {
      this.setState({ quantity: 1 });
    }
  };
  render() {
    const watch = this.props.navigation.getParam("watch");
    return (
      <Card
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <CardItem>
          <Left>
            <Body>
              <Text>{watch.name}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image
            source={{ uri: watch.image }}
            style={{ height: 300, width: "95%" }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text>{watch.description}</Text>

            <Text note>${watch.price}</Text>
          </Body>
        </CardItem>

        <CardItem>
          <Button
            transparent
            style={{ marginHorizontal: 5, fontSize: 30 }}
            onPress={this.handleQuantity}
          >
            <Text>Add/Remove</Text>
          </Button>
          <Label>{this.state.quantity} </Label>

          <Button transparent onPress={this.handleAddingToCart}>
            <Icon active type="MaterialIcons" name="add-shopping-cart" />
          </Button>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>

          <Body />
        </CardItem>
      </Card>
    );
  }
}

export default WatchDetail;
