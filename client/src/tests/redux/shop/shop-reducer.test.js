import {
  SHOP_DATA_ERROR,
  SHOP_DATA_START,
  SHOP_DATA_SUCCESS,
} from "../../../redux/shop/shop-actions";
import shopReducer from "../../../redux/shop/shop-reducer";

describe("TEST SHOP REDUCER", () => {
  const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
  };

  test("Should return the initial state", () => {
    expect(shopReducer(INITIAL_STATE, { type: SHOP_DATA_START })).toEqual({
      collections: null,
      isFetching: true,
      errorMessage: undefined,
    });
  });

  test("Test to set Collections", () => {
    expect(
      shopReducer(INITIAL_STATE, { type: SHOP_DATA_SUCCESS, payload: [] })
    ).toEqual({
      collections: [],
      isFetching: false,
      errorMessage: undefined,
    });
  });

  test("Test Error message", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: SHOP_DATA_ERROR,
        payload: "Error Message",
      })
    ).toEqual({
      collections: null,
      isFetching: false,
      errorMessage: "Error Message",
    });
  });
});
