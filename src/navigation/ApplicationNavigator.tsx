import { createStackNavigator } from "react-navigation";
import TabsNavigator from "./TabsNavigator";
import Modal from "../screens/modals/Modal";

// Add modals here, screens covering the whole screen including the tab bar

export default createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigator
    },
    Modal: {
      screen: Modal
    }
  },
  {
    initialRouteName: "Tabs",
    headerMode: "none",
    mode: "modal"
  }
);
