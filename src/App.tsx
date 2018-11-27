import React, { Component, RefObject } from "react";
import { createAppContainer } from "react-navigation";
import ApplicationNavigator from "./navigation/ApplicationNavigator";
import NavigationService from "./navigation/NavigationService";

export const AppNavigationContainer = createAppContainer(ApplicationNavigator);

interface Props {}
export default class App extends Component<Props> {
  private navigatorRef: RefObject<any>;

  constructor(props: Props) {
    super(props);

    this.navigatorRef = React.createRef();
    NavigationService.setTopLevelNavigator(this.navigatorRef);
  }

  render() {
    return <AppNavigationContainer ref={this.navigatorRef} />;
  }
}
