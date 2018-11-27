import React from "react";

import {
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from "react-navigation";

// TABBED SCREENS
import Tab1 from "../screens/tabs/Tab1";
import Tab2Navigator from "../screens/tabs/tab2/Tab2Navigator";

export default createBottomTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: () => ({
        tabBarLabel: "Tab 1"
      })
    },
    Tab2: {
      screen: Tab2Navigator,
      navigationOptions: () => ({
        tabBarLabel: "Tab 2"
      })
    }
  },
  {
    initialRouteName: "Tab1",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        let route = navigation.state;

        // Logic for closing stacked screens when navigating through the tab bar
        if (route.index > 0) {
          navigation.dispatch(
            StackActions.popToTop({
              key: route.key,
              immediate: !navigation.isFocused()
            })
          );
        } else {
          defaultHandler();
        }
      }
    })
  }
);
