import { SET_CURRENT_USER } from "../../redux/user/user.actions";
import userReducer from "../../redux/user/user.reducer";

describe("TEST USER REDUCER", () => {
    test("Should return the initial state", () => {
        expect(userReducer(undefined, {})).toEqual({ currentUser: null });
    });

    const initialState = {
        currentUser: null,
    };

    test("Test to set currentUser", () => {
        expect(userReducer(initialState, { type: SET_CURRENT_USER, payload: "Wladimir" })).toEqual({
            currentUser: "Wladimir",
        });
    });
});
