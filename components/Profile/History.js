import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Spinner
} from "native-base";
import cartStore from "../../stores/cartStore";
import Order from "./Order";
import { observer } from "mobx-react";

class OrderHistory extends Component {
  componentDidMount() {
    let userId = this.props.navigation.getParam("user");
    userId = userId.id;
    console.log("[History.js], userID", userId);
    cartStore.getHistoryOrder(userId);
    console.log(
      "[History.js], getHistoryOrder",
      cartStore.getHistoryOrder(userId)
    );
  }
  render() {
    if (cartStore.loadingHistory) {
      return <Spinner />;
    }
    const userOrder = cartStore.history.map(order => {
      return (
        <Order
          key={order.id}
          order={order}
          navigation={this.props.navigation}
        />
      );
    });
    return (
      <Container
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Content>{userOrder}</Content>
      </Container>
    );
  }
}

export default observer(OrderHistory);
