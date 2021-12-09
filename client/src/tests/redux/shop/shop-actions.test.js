import {
  fetchCollectionsStartAsync,
  fetchCollectionSuccess,
  SHOP_DATA_START,
  SHOP_DATA_SUCCESS,
} from "../../../redux/shop/shop-actions";

import configureMockeStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockeStore([thunk]);

describe("TESTING SHOP ACTIONS", () => {
  test("Test of fecth collections start", () => {
    const mockData = ["Wilson", "Wladimir", "Lopez", "Siguencia"];
    const expectedAction = {
      type: SHOP_DATA_SUCCESS,
      payload: mockData,
    };

    expect(fetchCollectionSuccess(mockData)).toEqual(expectedAction);
  });

  test("Test of fecth collections start asyncronized", () => {
    const store = mockStore();
    store.dispatch(fetchCollectionsStartAsync());

    const action = store.getActions();

    console.log("ACTION: ", action);
    const expectedAction = {
      type: SHOP_DATA_START,
    };

    expect(action[0]).toEqual(expectedAction);
  });
});
