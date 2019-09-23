import React, { Component } from "react";
import { Text, Button, Input } from "native-base";
import profileStore from "../../stores/profileStore";

class EditProfile extends Component {
  state = {
    phone: this.props.navigation.getParam("user").profile.phone,
    profile_image: null,
    user: this.props.navigation.getParam("user").profile.user
  };

  handlePhoneNumber = event => {
    this.setState({ phone: Number(event) });
  };

  handleEditProfile = userProfileID => {
    const navigation = this.props.navigation;
    profileStore.editProfile(userProfileID, this.state, navigation);
  };
  render() {
    const user = this.props.navigation.getParam("user").profile;
    const userProfile = user.id;

    return (
      <>
        {this.state.phone == null ? (
          <Input
            placeholder="Enter your phone number"
            onChangeText={this.handlePhoneNumber}
          />
        ) : (
          <Input
            value={String(this.state.phone)}
            placeholder="Enter your phone number"
            onChangeText={this.handlePhoneNumber}
          />
        )}

        <Button onPress={() => this.handleEditProfile(userProfile)}>
          <Text>Save</Text>
        </Button>
      </>
    );
  }
}

export default EditProfile;
