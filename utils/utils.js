// let text = ["Hello world!","Hello world!","Hello world!","Hello world!","Hello world!","Hello world!","Hello world!","Hello world!"];
// let result = text.slice(0, 5);
export const splitSites = (siteListArray) => {
  if (siteListArray.length > 6) {
    let result = siteListArray.slice(0, 5);
    return result;
  } else return null;
};
export const datesTimes = () => {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  const currentDateTime = `${year}-${
    month + 1
  }-${day} ${hour}:${minutes}:${seconds}`;
  console.log("current date is !...", `${currentDateTime}`);
  return currentDateTime;
};
export const convertDateStringIntoNumber = (defaultTime, update) => {
  function convertFromStringToDate(responseDate) {
    let dateComponents = responseDate.split(" ");

    return dateComponents;
  }

  const dateArray = update
    ? convertFromStringToDate(defaultTime)
    : ["23", "January", "2021", "", "12:00"];
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const datess = dateArray[0];
  const months = dateArray[1];
  const years = dateArray[2];
  const numberTime = dateArray[4];
  console.log(
    "date format change into string...",
    datess,
    monthArray.indexOf(months) + 1,
    years,
    numberTime
  );
  const updateDateStringToNumber = `${
    monthArray.indexOf(months) + 1
  }/${datess}/${years}`;
  const storeDate = new Date(update ? updateDateStringToNumber : "03/25/2015");
  const day = storeDate.getDate();
  const month = storeDate.getMonth() + 1;
  const year = storeDate.getFullYear();

  // const updateDate = [day + "/" + month + "/" + year];

  const updateDate = `${month}/${day}/${year}`;
  return { updateDate, numberTime };
};

export const splitCurrentNumericArray = (created_at) => {
  const creat_date = new Date(created_at);
  const [day, month, year] = [
    creat_date.getDate(),
    creat_date.getMonth(),
    creat_date.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    creat_date.getHours(),
    creat_date.getMinutes(),
    creat_date.getSeconds(),
  ];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateAndTime = `${day}-${months[month]}-${year} ${hour}:${minutes}`;
  return dateAndTime;
};
