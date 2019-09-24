import React, { Component } from "react";
import { Container, Button, Text, Content, Item, Input } from "native-base";
import addressStore from "../../stores/addressStore";

class EditAddress extends Component {
  state = {
    user: this.props.navigation.getParam("user").id,

    country: this.props.navigation.getParam("user").address.country,
    city: this.props.navigation.getParam("user").address.city,
    governate: this.props.navigation.getParam("user").address.state,
    zipcode: this.props.navigation.getParam("user").address.zipcode,
    street_line1: this.props.navigation.getParam("user").address.street_line1,
    street_line2: this.props.navigation.getParam("user").address.street_line2
  };

  handleEditAddress = () => {
    const addressID = this.props.navigation.getParam("user").address;
    addressStore.EditAddress(addressID.id, this.state);
    console.log("edit address store ");
  };
  handleDeleteAddress = () => {
    const addressID = this.props.navigation.getParam("user").address;
    const navigation = this.props.navigation;
    addressStore.DeleteAddress(addressID.id, navigation);
    console.log("delete address store ");
  };
  render() {
    const {
      country,
      city,
      governate,
      zipcode,
      street_line1,
      street_line2
    } = this.state;
    return (
      <Container>
        <Content>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Country"
              value={country}
              onChangeText={country => this.setState({ country })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="governate"
              value={governate}
              onChangeText={governate => this.setState({ governate })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="zipcode"
              value={zipcode}
              onChangeText={zipcode => this.setState({ zipcode })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="City"
              value={city}
              onChangeText={city => this.setState({ city })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="street line 1"
              value={street_line1}
              onChangeText={street_line1 => this.setState({ street_line1 })}
            />
          </Item>
          <Item rounded>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="street line 2"
              value={street_line2}
              onChangeText={street_line2 => this.setState({ street_line2 })}
            />
          </Item>
          <Button danger onPress={() => this.handleEditAddress()}>
            <Text>Add Address</Text>
          </Button>
          <Button danger onPress={() => this.handleDeleteAddress()}>
            <Text>Delete Address</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default EditAddress;
