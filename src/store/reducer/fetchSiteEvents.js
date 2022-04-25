import {
  FETCH_SITES_EVENTS,
  CLEAR_SITES_EVENTS,
} from "../action/fetchSiteEvents";
const initialState = {
  siteEventsArray: [],
  eventCalendar: {},
  activeDate: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SITES_EVENTS:
      return {
        siteEventsArray: action.payload,
        eventCalendar: action.eventCalendar,
        activeDate: action.activeDate,
      };
    case CLEAR_SITES_EVENTS:
      return {
        siteEventsArray: [],
        eventCalendar: {},
      };
    default:
      return state;
  }
};
