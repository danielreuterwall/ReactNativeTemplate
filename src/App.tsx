import React, { Component, RefObject } from "react";
import { createAppContainer } from "react-navigation";
import ApplicationNavigator from "./navigation/ApplicationNavigator";
import NavigationService from "./navigation/NavigationService";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/Store";
import AppListener from "./AppListener";

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
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigationContainer ref={this.navigatorRef} />
          <AppListener />
        </PersistGate>
      </Provider>
    );
  }
}
