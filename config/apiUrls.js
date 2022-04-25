// const baseUrl = `http://192.168.1.100:3015`;
const baseUrl = `https://mcrsuite.com`;

// images base url
// const imagesUrl = `http://192.168.1.100:3015`;
//const imagesUrl = `http://18.190.50.198:5573`;

export default ApiUrls = {
  baseUrl,
  // imagesUrl,
  // scan NFC
  scanNFC: `/api/userattendance`,
  // auth
  login: `/api/authenticateUser`,
  logout: `/api/logout-user`,
  // fetch news reel
  newsReels: `/api/api-reel`,
  // Events
  fetchEvents: `/api/api-events`,
  createEvents: `/api/api-events`,
  // Sites
  fetchSites: `/api/api-site`,
  // reports

  // fetch reports
  fetchDailyReports: `/api/api-reports`,
  fetchIncidentReport: `/api/Incident-Reports`,
  fetchSiteVisit: `/api/Site-Visit-Reports`,
  fetchMobileReports: `/api/Mobile-Patrol-Report`,
  deleteReports: `/api/api-reports`,
  // post reports
  postReports: `/api/api-reports`,
};
