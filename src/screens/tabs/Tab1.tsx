import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import NavigationService, { Route } from "../../navigation/NavigationService";
import { StatsState } from "../../stats/StatsStore";
import { ApplicationState } from "../../store/Store";
import { connect } from "react-redux";

interface Props {
  stats: StatsState;
}

class Tab1 extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>This is tab 1!</Text>
        <Text style={styles.welcome}>
          This app has been launched {this.props.stats.appLaunches} times
        </Text>
        <Button title="Open modal" onPress={this.openModal} />
      </View>
    );
  }

  openModal() {
    NavigationService.navigate(Route.Modal);
  }
}

const mapStateToProps = (state: ApplicationState, ownProps: Props) => ({
  stats: state.stats
});

export default connect(mapStateToProps)(Tab1);

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
