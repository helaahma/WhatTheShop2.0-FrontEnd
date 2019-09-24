import React, { Component } from "react";
import { Image, TouchableHighlight, StyleSheet } from "react-native";
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
  Right
} from "native-base";

class WatchCard extends Component {
  render() {
    const watch = this.props.watch;
    return (
      <Card transparent>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              watch: watch
            })
          }
        >
          <CardItem style={styles.card}>
            <Left>
              <Image
                source={{ uri: watch.image }}
                style={{ height: 100, width: "40%", flex: 1 }}
              />
              <Body>
                <Text style={styles.text}>{watch.name}</Text>
                <Text note style={styles.textNote}>
                  ${watch.price}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableHighlight>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderColor: "#25274d",
    backgroundColor: "transparent"
  },
  text: { color: "white" },
  textNote: { color: "#FEB47B" }
});

export default WatchCard;
