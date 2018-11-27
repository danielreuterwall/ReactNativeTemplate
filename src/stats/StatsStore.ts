const actionType = {
  AppLaunch: "[stats] AppLaunch",
  ModalOpened: "[stats] ModalOpened"
};

export type StatsState = {
  appLaunches: number;
  modalOpened: number;
};

let initialState: StatsState = <StatsState>{
  appLaunches: 0,
  modalOpened: 0
};

export const stats = (
  state: StatsState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case actionType.AppLaunch:
      return Object.assign({}, state, <StatsState>{
        appLaunches: (state.appLaunches || 0) + 1
      });
    case actionType.ModalOpened:
      return Object.assign({}, state, <StatsState>{
        modalOpened: (state.modalOpened || 0) + 1
      });
  }
  return state;
};

export class AppLaunch {
  readonly type = actionType.AppLaunch;
  constructor(public payload: string = "Dummy payload") {}
}

export class ModalOpened {
  readonly type = actionType.ModalOpened;
  constructor(public payload: string = "Dummy payload") {}
}

type ActionTypes = AppLaunch | ModalOpened;

export const StatsActions = {
  AppLaunch,
  ModalOpened
};
