export const HIDE_OR_SHOW_BOTTOM_TAB_BAR = "HIDE_OR_SHOW_BOTTOM_TAB_BAR"
export const SHOW_BOTTOM_TAB_BAR = "SHOW_BOTTOM_TAB_BAR"

export const hideOrShowBottomTabBarAction = () =>{
    console.log('action called!')
    return {type: HIDE_OR_SHOW_BOTTOM_TAB_BAR};
};

export const showBottomTabBarAction = () =>{
    return {type: SHOW_BOTTOM_TAB_BAR};
};
// export const QRSCAN_POST_ID = "QRSCAN_POST_ID";
// export const QRSCAN_POST_ATTENDENCE = "QRSCAN_POST_ATTENDENCE";

// export const qrScanEmployeMember = (candidateId) => {
//   return { type: QRSCAN_POST_ID, candidateId: candidateId };
// };
