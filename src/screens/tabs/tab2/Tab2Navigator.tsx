import { createStackNavigator } from "react-navigation";
import Tab2 from "./Tab2";
import Screen1 from "./Screen1";

// Add screens opening on top of tab 2

export default createStackNavigator(
  {
    Tab2: {
      screen: Tab2
    },
    Screen1: {
      screen: Screen1
    }
  },
  {
    initialRouteName: "Tab2",
    headerMode: "none",
    mode: "modal"
  }
);
