import React, { Component } from "react";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Button,
  Text,
  Left,
  Right,
  Icon
} from "native-base";
import watchStore from "../../stores/watchStore";

class Order extends Component {
  handlesubmit = () => {
    watchStore.handleUpdate();
  };
  render() {
    const order = this.props.order;
    console.log("Order", order);
    const cartId = order.id;
    return (
      <>
        <List>
          <ListItem
            last
            Button
            style={{ marginTop: 5 }}
            onPress={() =>
              this.props.navigation.navigate("Detail", { cartId: cartId })
            }
          >
            <Text>{order.id}</Text>
          </ListItem>
          <Button
            full
            style={{ marginBottom: 10, marginTop: 5 }}
            onPress={() => this.handlesubmit(order.watches)}
          >
            <Text> avialability</Text>
          </Button>
        </List>
      </>
    );
  }
}
export default observer(Order);
