import { CHECK_NFC_STATUS } from "../action/nfcAction";
const initialState = {
  nfcStatus: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_NFC_STATUS:
      return {
        nfcStatus: true,
      };
  }
  return state;
};
