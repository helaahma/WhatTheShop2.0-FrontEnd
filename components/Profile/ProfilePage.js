import React, { Component } from "react";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import watchStore from "../../stores/watchStore";

import {
  Container,
  Left,
  Content,
  Thumbnail,
  ListItem,
  Text,
  Button,
  View,
  Right
} from "native-base";
import { observer } from "mobx-react";
import { StyleSheet } from "react-native";

class ProfilePage extends Component {
  componentDidMount() {
    const token = authStore.user;
    if (token) {
      profileStore.retrieveUserProfile(token);
    }
  }
  // componentDidUpdate() {
  //   profileStore.retrieveUserProfile();
  // }

  render() {
    console.log("[ProfilePage.js] render");
    let user = authStore.user;
    console.log("[ProfilePage.js] user: ", user);
    let profile = profileStore.profile;
    console.log("[ProfilePage.js] profile: ", profile);
    const navigation = this.props.navigation;

    if (!profile) {
      return (
        <View>
          <Text>loading</Text>
        </View>
      );
    } else {
      return (
        <Container style={styles.container}>
          <Content>
            <Text style={{ marginTop: 8, alignSelf: "center" }}>
<<<<<<< HEAD
              {profile.user.username}
=======
              {user.user.first_name} {user.user.last_name}
>>>>>>> dd76ac355131efb9bec6a69527ed9ec296296b6c
            </Text>

            <ListItem>
<<<<<<< HEAD
              <Text>
                Name: {profile.user.first_name} {profile.user.last_name}
              </Text>
            </ListItem>
            {profile.user.email && (
              <ListItem>
                <Text>Email: {profile.user.email}</Text>
              </ListItem>
            )}

=======
              <Text>Email: {user.user.email}</Text>
            </ListItem>
>>>>>>> dd76ac355131efb9bec6a69527ed9ec296296b6c
            <ListItem>
              <Text>Country: {profile.country}</Text>
            </ListItem>
            <ListItem>
              <Text>City: {profile.city}</Text>
            </ListItem>
            <ListItem>
              <Text>Governate: {profile.governate}</Text>
            </ListItem>
            <ListItem>
              <Text>Zipcode: {profile.zipcode}</Text>
            </ListItem>
            <ListItem>
              <Text>Address: {profile.street_line1}</Text>
            </ListItem>
            <ListItem>
              <Text>Address line 2: {profile.street_line2}</Text>
            </ListItem>
            <ListItem>
              <Text>Phone: {profile.phone_number}</Text>
            </ListItem>

            <ListItem
              last
              Button
              style={{ marginTop: 5 }}
              onPress={() =>
                navigation.navigate("OrderHistory", { user: user })
              }
            >
              <Text>History Order</Text>
            </ListItem>

            <Button
              danger
              style={{ marginTop: 8 }}
              onPress={() => authStore.logout(navigation)}
            >
              <Text>Logout</Text>
            </Button>
          </Content>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#422D56"
  },
  text: { color: "white" }
});

export default observer(ProfilePage);
