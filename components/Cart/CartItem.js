import React, { Component } from "react";
import { Image, TouchableHighlight } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";

import { withNavigation } from "react-navigation";

import { observer } from "mobx-react";
class CartItem extends Component {
  render() {
    const item = this.props.item;
    const { navigate } = this.props.navigation.navigate;
    let total;

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
                <Text>{item.name}</Text>
                <Text note>${item.total}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableHighlight>
      </Card>
    );
  }
}

export default withNavigation(observer(CartItem));
