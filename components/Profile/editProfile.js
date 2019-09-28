import React, { Component } from "react";
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Container,
  Content
} from "native-base";
import profileStore from "../../stores/profileStore";

class EditProfile extends Component {
  state = {
    first_name: this.props.navigation.getParam("profile").user.first_name,
    last_name: this.props.navigation.getParam("profile").user.last_name,
    email: this.props.navigation.getParam("profile").user.email,
    Country: this.props.navigation.getParam("profile").Country,
    city: this.props.navigation.getParam("profile").city,
    governate: this.props.navigation.getParam("profile").governate,
    zipcode: this.props.navigation.getParam("profile").zipcode,
    street_line1: this.props.navigation.getParam("profile").street_line1,
    street_line2: this.props.navigation.getParam("profile").street_line2,
    phone: this.props.navigation.getParam("profile").phone
  };
  componentDidMount() {
    console.log("[editProfile.js], profile");
  }
  handleEditProfile = ProfileUpdate => {
    const navigation = this.props.navigation;
    profileStore.editProfile(ProfileUpdate, navigation);
  };
  render() {
    return (
      <Container>
        <>
          <Input
            placeholder={this.state.first_name}
            onChangeText={first_name => this.setState({ first_name })}
          />
          <Input
            placeholder="last name"
            onChangeText={last_name => this.setState({ last_name })}
          />
          <Input
            placeholder="email"
            onChangeText={email => this.setState({ email })}
          />
          <Input
            placeholder="Country"
            onChangeText={Country => this.setState({ Country })}
          />
          <Input
            placeholder="city"
            onChangeText={city => this.setState({ city })}
          />
          <Input
            placeholder="governate"
            onChangeText={governate => this.setState({ governate })}
          />
          <Input
            placeholder={this.state.zipcode}
            onChangeText={zipcode => this.setState({ zipcode })}
          />
          <Input
            placeholder="street_line1"
            onChangeText={street_line1 => this.setState({ street_line1 })}
          />
          <Input
            placeholder="street_line2"
            onChangeText={street_line2 => this.setState({ street_line2 })}
          />
          <Input
            placeholder="phone"
            onChangeText={phone => this.setState({ phone })}
          />
          <Button onPress={() => this.handleEditProfile(this.state)}>
            <Text>Save</Text>
          </Button>
        </>
      </Container>
    );
  }
}

export default EditProfile;
