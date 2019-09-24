import React, { Component } from "react";

import { Card, CardItem, Text } from "native-base";

import ProfilePage from "./ProfilePage";

class Profile extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <ProfilePage navigation={this.props.navigation} />
        </CardItem>
      </Card>
    );
  }
}
export default Profile;
