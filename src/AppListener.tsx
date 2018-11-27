import React, { Component } from "react";

import { AppState, AppStateStatus } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import StatsService from "./stats/StatsService";

interface Props {}

export default class AppListener extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  async componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
    StatsService.appLaunch();
    this.appActive();
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange(state: AppStateStatus) {
    state === "active" && this.appActive();
  }

  appActive() {
    console.debug("App became active");
  }

  render() {
    return null;
  }
}
