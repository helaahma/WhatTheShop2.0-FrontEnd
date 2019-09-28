import React, { Component } from "react";
import { observer } from "mobx-react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

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
import watchStore from "../../stores/watchStore";

class AddWatch extends Component {
  state = {
    brand: "",
    model_name: "",
    case_size: 0,
    thickness: null,
    lug_width: null,
    water_resistance: 0,
    manufacture_year: null,
    price: 0.0,
    box_papers: null,
    strap: null,
    functions: null,
    movement: "",
    payment: null,
    delivery: null,
    description: null,
    image: null
  };
  navigation = this.props.navigation;
  handlesubmit = () => {
    console.log("watch state", this.state);
    watchStore.addWatch(this.state);
  };

  render() {
    return (
      <Container>
        <Content>
          <ScrollView>
            <Form>
              <Item>
                <Input
                  placeholder="Brand"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={brand => this.setState({ brand })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="model name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={model_name => this.setState({ model_name })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="case size"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={case_size => this.setState({ case_size })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="thickness"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={thickness => this.setState({ thickness })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="lug width"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={lug_width => this.setState({ lug_width })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="water resistance"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={water_resistance =>
                    this.setState({ water_resistance })
                  }
                />
              </Item>
              <Item>
                <Input
                  placeholder="manufacture year"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={manufacture_year =>
                    this.setState({ manufacture_year })
                  }
                />
              </Item>
              <Item>
                <Input
                  placeholder="price"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={price => this.setState({ price })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="box & papers"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={box_papers => this.setState({ box_papers })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="strap"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={strap => this.setState({ strap })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="functions"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={functions => this.setState({ functions })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="movement"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={movement => this.setState({ movement })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="payment"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={payment => this.setState({ payment })}
                />
              </Item>
              <Item>
                <Input
                  placeholder="delivery"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={delivery => this.setState({ delivery })}
                />
              </Item>
              <Item last>
                <Input
                  placeholder="description"
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={description => this.setState({ description })}
                />
              </Item>

              <Button full onPress={() => this.handlesubmit()}>
                <Text>Add Watch</Text>
              </Button>
            </Form>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default observer(AddWatch);
