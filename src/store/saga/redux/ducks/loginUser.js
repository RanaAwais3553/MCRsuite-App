export const SET_USER = 'SET_USER';
export const GET_USR = 'GET_USR';

export const getUser = userData => ({
  type: GET_USR,
  userData,
});

export const setUser = user => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const {user} = action;
      return {...state, user};
    default:
      return state;
  }
};
