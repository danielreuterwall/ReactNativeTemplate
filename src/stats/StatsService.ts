import { store } from "../store/Store";
import { StatsActions } from "./StatsStore";

class StatsService {
  public appLaunch(): void {
    store.dispatch({
      ...new StatsActions.AppLaunch()
    });
  }

  public modalOpened(): void {
    store.dispatch({
      ...new StatsActions.ModalOpened()
    });
  }
}

export default new StatsService();
