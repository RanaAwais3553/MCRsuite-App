import {
  HIDE_OR_SHOW_BOTTOM_TAB_BAR,
  SHOW_BOTTOM_TAB_BAR,
} from "../action/hideOrShowBottomTabBarAction";

const initialState = {
  tabVisible: true,
};
export default (state = initialState, action) => {
  console.log(
    "hide or show tab reducer function called!...",
    initialState.tabVisible
  );
  switch (action.type) {
    case HIDE_OR_SHOW_BOTTOM_TAB_BAR:
      return {
        tabVisible: false,
      };
    case SHOW_BOTTOM_TAB_BAR:
      return {
        tabVisible: true,
      };
  }
  return state;
};
