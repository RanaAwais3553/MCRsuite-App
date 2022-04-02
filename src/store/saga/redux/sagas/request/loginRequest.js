export const requestPostUser = async userData => {
  const response = await fetch(`https://mcrsuite.com/api/authenticateUser`, {
    method: 'POST',
    body: userData,
  });
  const resData = await response.json();
  return resData;
};
