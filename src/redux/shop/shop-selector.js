import { createSelector } from "reselect";

import memoize from "lodash.memoize";
/*
Se utilizan para memoize el método que no se pudo crear con createStructuredSelector
Memoize does the same idea of memoization as reselect does for our selectors,
except this time we're memoizing the return of our function which returns our selector:
(collectionUrlParam) =>
createSelector(
  [selectCollections],
  (collections) => collections[collectionUrlParam]
)*/

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
);

/*
Este objeto se usaba con arrays, era muy pesado ya que se demora en iterar

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
};

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
*/

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections ? collections[collectionUrlParam] :null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop=> shop.isFetching
)
