import {
  NavigationActions,
  NavigationComponent,
  NavigationNavigateActionPayload
} from "react-navigation";
import { RefObject } from "react";

export enum Route {
  Tab1,
  Tab2,
  Modal,
  Screen1
}

class NavigationService {
  private navigator?: RefObject<NavigationComponent> = undefined;

  public setTopLevelNavigator(navigatorRef: NavigationComponent): void {
    this.navigator = navigatorRef;
  }

  public navigate(route: Route, params: any = null) {
    if (!this.navigator || !this.navigator.current) {
      throw new Error("Navigator not set");
    }
    this.navigator.current.dispatch(
      NavigationActions.navigate({
        routeName: Route[route],
        params
      } as NavigationNavigateActionPayload)
    );
  }

  public goBack() {
    if (!this.navigator || !this.navigator.current) {
      throw new Error("Navigator not set");
    }
    this.navigator.current.dispatch(NavigationActions.back());
  }
}

export default new NavigationService();
