import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NavigationService from "../../navigation/NavigationService";

interface Props {}

export default class Modal extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a model covering the whole screen
        </Text>
        <Button title="Close modal" onPress={this.closeModal} />
      </View>
    );
  }

  closeModal() {
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
