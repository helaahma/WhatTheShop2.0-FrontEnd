import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components

import {
  Form,
  Item,
  Input,
  Button,
  Text,
  Container,
  Content
} from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handlesubmit = () => {
    authStore.login(this.state, this.props.navigation);
  };

  render() {
    if (authStore.user) this.props.navigation.replace("Profile");
    return (
      <Container>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Form style={{ width: "80%" }}>
            <Item>
              <Input
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              full
              style={{ marginBottom: 10, marginTop: 5 }}
              onPress={this.handlesubmit}
            >
              <Text>Login</Text>
            </Button>
            <Button
              full
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default observer(Login);
