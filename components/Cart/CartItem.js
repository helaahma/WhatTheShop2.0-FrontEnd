import React, { Component } from "react";
import { Image, TouchableHighlight } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";

import { withNavigation } from "react-navigation";

import { observer } from "mobx-react";
class CartItem extends Component {
  render() {
    const item = this.props.item;
    const navigate = this.props.navigation.navigate;
    console.log("[Cartitem.js] item:", item);

    return (
      <Card>
        <TouchableHighlight
          onPress={() =>
            navigate("Detail", {
              item: item
            })
          }
        >
          <CardItem>
            <Left>
              <Image
                source={{ uri: item.image }}
                style={{ height: 150, width: null, flex: 1 }}
              />
              <Body>
                <Text>Brand: {item.watch.brand}</Text>
                <Text>Model name: {item.watch.model_name}</Text>
                <Text>{item.status}</Text>
                <Text note>KWD {item.total}</Text>
                <Text>Manufacture year: {item.watch.manufacture_year}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableHighlight>
      </Card>
    );
  }
}

export default withNavigation(observer(CartItem));
