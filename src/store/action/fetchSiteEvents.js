export const FETCH_SITES_EVENTS = "FETCH_SITES_EVENTS";
export const CLEAR_SITES_EVENTS = "CLEAR_SITES_EVENTS";
import apiClient from "../../../config/axios";
import ApiUrls from "../../../config/apiUrls";
export const clearSitesEvent = () => {
  return { type: CLEAR_SITES_EVENTS };
};
export const fetchSiteEvents = (id) => {
  return async (dispatch) => {
    try {
      let response = await apiClient().get(`${ApiUrls.fetchEvents}/${id}`);
      if (!response.status == 200) {
        console.log("daily report error is:!...", response);
        throw new Error("Something went wrong!");
      } else {
        // const resData = await response.json();
        var count = {};
        response?.data?.eventsData.forEach(function (i) {
          count[i.date] = [
            { name: i.title, id: i.id, color: i.category_color },
          ];
        });
        response?.data?.eventsData.forEach(function (i) {
          if (i.date in count) {
            count[i.date].push({
              name: i.title,
              id: i.id,
              color: i.category_color,
            });
          }
        });
        for (var i in count) {
          //  console.log(i); // alerts key
          count[i].pop(); //alerts key's value
        }
        dispatch({
          type: FETCH_SITES_EVENTS,
          payload: response.data.eventsData,
          eventCalendar: count,
          activeDate: response.data.eventsData[0].date,
        });
      }
    } catch (err) {
      throw err;
    }
  };
};
