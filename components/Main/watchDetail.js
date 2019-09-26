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
  handleAddingToCart = () => {
    if (AuthStore.user) {
      const item = this.props.navigation.getParam("watch");
      console.log("HANDLE ADD TO CART", item);
      cartStore.addItemToCart(item);
    } else {
      alert("you have to login.");
      this.props.navigation.navigate("Login");
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
              <Text>
                {watch.brand} {watch.model_name}
              </Text>
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
            <Text note>${watch.price}</Text>
          </Body>
        </CardItem>

        <CardItem>
          <Label> add </Label>

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
