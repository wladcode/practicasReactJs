const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      //imageUrl: 'images/hats.png', // local file in public/images/
      id: 1,
      linkUrl: "store/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      //imageUrl: 'images/jackets.png', // local file in public/images/
      id: 2,
      linkUrl: "store/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      //imageUrl: 'images/sneakers.png', // local file in public/images/
      id: 3,
      linkUrl: "store/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      //imageUrl: 'images/womens.png', // local file in public/images/
      size: "large",
      id: 4,
      linkUrl: "store/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      //imageUrl: '../../../../../public/images/men.png', // local file in public/images/
      size: "large",
      id: 5,
      linkUrl: "store/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
