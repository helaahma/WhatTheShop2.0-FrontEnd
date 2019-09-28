import React, { Component } from "react";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList
} from "accordion-collapse-react-native";
import watchStore from "../../stores/watchStore";

import {
  Container,
  Left,
  Content,
  Thumbnail,
  Accordion,
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
    const user = profileStore.profile;

    const navigation = this.props.navigation;

    if (!user) {
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
              Hello {user.user.first_name} {user.user.last_name}
            </Text>

            <ListItem>
              <Text>Email: {user.user.email}</Text>
            </ListItem>
            <Collapse>
              <CollapseHeader>
                <View>
                  <Text style={{ marginTop: 8 }}>
                    User Details: Click to view
                  </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <ListItem>
                  <Text>Country: {user.country}</Text>
                </ListItem>
                <ListItem>
                  <Text>City: {user.city}</Text>
                </ListItem>
                <ListItem>
                  <Text>Governate: {user.governate}</Text>
                </ListItem>
                <ListItem>
                  <Text>Zipcode: {user.zipcode}</Text>
                </ListItem>
                <ListItem>
                  <Text>Address: {user.street_line1}</Text>
                </ListItem>
                <ListItem>
                  <Text>Address line 2: {user.street_line2}</Text>
                </ListItem>
                <ListItem>
                  <Text>Phone: {user.phone_number}</Text>
                </ListItem>
              </CollapseBody>
            </Collapse>

            <ListItem
              last
              Button
              style={{ marginTop: 5 }}
              onPress={() =>
                navigation.navigate("orderHistory", { user: user })
              }
            >
              <Text>History Order</Text>
            </ListItem>

            <Button
              danger
              style={{ marginTop: 8 }}
              onPress={() =>
                navigation.navigate("EditProfile", { profile: user })
              }
            >
              <Text>Edit Profile</Text>
            </Button>
            <Button
              danger
              style={{ marginTop: 8 }}
              onPress={() => authStore.logout(navigation)}
            >
              <Text>Add Watch</Text>
            </Button>
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
