export const types = {
    LOGIN_REQUEST: "login/LOGIN_REQUEST",
    LOGIN_FAIL: "login/LOGIN_FAIL",
    LOGIN_SUCCESS: "login/LOGIN_SUCCESS",
};

const INITIAL_STATE = {
    isFetching: false,
};

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.types) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case types.LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
            };

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};

export const actions = {
    loginRequest: (userCredentials) => ({ type: types.LOGIN_REQUEST, payload: userCredentials }),
};
