export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const CHECK_USER_SESSION = "CHECK_USER_SESSION";
export const USER_LOGOUT_START = "USER_LOGOUT_START";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAIL = "USER_LOGOUT_FAIL";
export const USER_SIGNUP_START = "USER_SIGNUP_START";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS;";

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};

export const checkUserSession = () => {
    return {
        type: CHECK_USER_SESSION,
    };
};

export const userLogOutStart = () => {
    return {
        type: USER_LOGOUT_START,
    };
};

export const userLogOutSuccess = () => {
    return {
        type: USER_LOGOUT_SUCCESS,
    };
};

export const userSignUpStart = (userCredentials) => {
    return {
        type: USER_SIGNUP_START,
        payload: userCredentials,
    };
};

export const userSignUpSuccess = ({ user, additionalData }) => {
    return {
        type: USER_SIGNUP_SUCCESS,
        payload: { user, additionalData },
    };
};
