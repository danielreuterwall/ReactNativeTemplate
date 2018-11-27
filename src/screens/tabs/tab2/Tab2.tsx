import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NavigationService, {
  Route
} from "../../../navigation/NavigationService";

interface Props {}

export default class Tab2 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is tab 2!</Text>
        <Button title="Open screen" onPress={this.openScreen} />
      </View>
    );
  }

  openScreen() {
    NavigationService.navigate(Route.Screen1);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
