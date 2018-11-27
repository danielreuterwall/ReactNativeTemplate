import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NavigationService from "../../../navigation/NavigationService";

interface Props {}

export default class Screen1 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a sceen opened withing the tab navigation
        </Text>
        <Button title="Close screen" onPress={this.closeScreen} />
      </View>
    );
  }

  closeScreen() {
    NavigationService.goBack();
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
