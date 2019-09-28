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

profile = profileStore.profile;

class EditProfile extends Component {
  state = {
    first_name: profile.user.first_name,
    last_name: profile.user.last_name,
    email: profile.user.email,
    Country: profile.Country,
    city: profile.city,
    governate: profile.governate,
    zipcode: profile.zipcode,
    street_line1: profile.street_line1,
    street_line2: profile.street_line2,
    phone: profile.phone
  };

  handleEditProfile = ProfileUpdate => {
    const navigation = this.props.navigation;
    profileStore.editProfile(ProfileUpdate, navigation);
  };
  render() {
    return (
      <Container>
        <>
          <Input
            placeholder="first name"
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
            placeholder="zipcode"
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
