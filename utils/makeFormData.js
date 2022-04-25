const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

const makeFormData = (data, update) => {
  let newData = !!update ? new URLSearchParams() : new FormData();
  if (!isEmptyObject(data)) {
    for (let key in data) {
      newData.append(key, data[key]);
    }
  }

  return newData;
};
export default makeFormData;
