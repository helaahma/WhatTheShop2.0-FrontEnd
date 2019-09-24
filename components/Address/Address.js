import React, { Component } from "react";
import { Container, Button, Header, Content, Item, Input } from "native-base";
import { Text } from "react-native";
import addressStore from "../../stores/addressStore";

class Address extends Component {
  state = {
    user: this.props.navigation.getParam("user").id,

    country: "",
    city: "",
    state: "",
    governate: "",
    street_line1: "",
    street_line2: ""
  };

  handleAddingAddress = () => {
    addressStore.CreateAddress(this.state);
  };
  render() {
    return (
      <Container>
        <Content>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Country"
              onChangeText={country => this.setState({ country })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="governate"
              onChangeText={governate => this.setState({ governate })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="City"
              onChangeText={city => this.setState({ city })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="street line 1"
              onChangeText={street_line1 => this.setState({ street_line1 })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="street line 2"
              onChangeText={street_line2 => this.setState({ street_line2 })}
            />
          </Item>
          <Button danger onPress={() => this.handleAddingAddress()}>
            <Text>Add Address</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Address;
