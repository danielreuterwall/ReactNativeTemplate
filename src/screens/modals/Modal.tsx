import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NavigationService from "../../navigation/NavigationService";
import StatsService from "../../stats/StatsService";
import { ApplicationState } from "../../store/Store";
import { connect } from "react-redux";
import { StatsState } from "../../stats/StatsStore";

interface Props {
  stats: StatsState;
}

class Modal extends Component<Props> {
  componentDidMount() {
    StatsService.modalOpened();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a model covering the whole screen
        </Text>
        <Text style={styles.welcome}>
          This modal has been opened {this.props.stats.modalOpened} times
        </Text>

        <Button title="Close modal" onPress={this.closeModal} />
      </View>
    );
  }

  closeModal() {
    NavigationService.goBack();
  }
}

const mapStateToProps = (state: ApplicationState, ownProps: Props) => ({
  stats: state.stats
});

export default connect(mapStateToProps)(Modal);

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
