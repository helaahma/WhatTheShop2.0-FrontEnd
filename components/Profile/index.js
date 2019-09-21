import React, { Component } from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
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
