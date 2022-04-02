import hideOrShowBottomTabBarReducer from "./reducer/hideOrShowBottomTabBarReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducer/authReducer";
import reportReducer from "./reducer/reportReducer";
import siteListReducer from "./reducer/siteListReducer";
import profileReducer from "./reducer/profileReducer";
import scanResponseReducer from "./reducer/scanResponseReducer";
import postReportReducer from "./reducer/postReportReducer";
import nfcReducer from "./reducer/nfcReducer";
import modalReducer from "./reducer/modalReducer";

const rootReducer = combineReducers({
  tabValue: hideOrShowBottomTabBarReducer,
  auth: authReducer,
  reportList: reportReducer,
  siteList: siteListReducer,
  pasword: profileReducer,
  scan: scanResponseReducer,
  postRes: postReportReducer,
  nfc: nfcReducer,
  modl: modalReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
