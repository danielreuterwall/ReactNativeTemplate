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
    initialRouteName: "Tab1"
  }
);
