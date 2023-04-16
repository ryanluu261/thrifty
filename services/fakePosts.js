const POSTS = [
  {
    photoUrl: require('../assets/post.jpeg'),
    id: 1,
    title: 'Lake photography',
    description: 'No scratches, well conditioned, aidhfpasdjfa;okjfdaos',
    sellerName: 'Ryan Luu',
    sellerPic: require('../assets/keggy.jpeg'),
    sellerRating: 4.5,
    reviewNo: 20,
    transactionNo: 30,
    itemsNo: 15,
  },
  {
    photoUrl: require('../assets/angricat.png'),
    id: 2,
    title: 'Succulent plant',
    description: 'thriving, had it for 3 month',
    sellerName: '',
    sellerPic: require('../assets/keggy.jpeg'),
    sellerRating: 4.5,
    reviewNo: 20,
    transactionNo: 30,
    itemsNo: 15,
  },
  {
    photoUrl: require('../assets/angricat.png'),
    id: 3,
    title: 'Meditation carpet',
    description: 'Feels closer to yourself spritually',
    sellerName: '',
    sellerPic: require('../assets/keggy.jpeg'),
    sellerRating: 4.5,
    reviewNo: 20,
    transactionNo: 30,
    itemsNo: 15,
  },
  {
    photoUrl: require('../assets/angricat.png'),
    id: 4,
    title: 'Hiking boots SZ 10',
    description: 'Worn 3 times, quit hiking lol',
    sellerName: '',
    sellerPic: require('../assets/keggy.jpeg'),
    sellerRating: 4.5,
    reviewNo: 20,
    transactionNo: 30,
    itemsNo: 15,
  },
  {
    photoUrl: require('../assets/angricat.png'),
    id: 5,
    title: 'A Mile Run',
    description: 'A solid run!',
    sellerName: '',
    sellerPic: require('../assets/keggy.jpeg'),
    sellerRating: 4.5,
    reviewNo: 20,
    transactionNo: 30,
    itemsNo: 15,
  },
  {
    photoUrl: require('../assets/angricat.png'),
    id: 6,
    title: 'Meditation',
    description: 'Feels closer to myself spritually now',
    sellerName: '',
    sellerPic: require('../assets/keggy.jpeg'),
    sellerRating: 4.5,
    reviewNo: 20,
    transactionNo: 30,
    itemsNo: 15,
  },
];

export function getPost(id) {
  return POSTS.find((post) => post.id == id);
}

export function getPosts() {
  return POSTS;
}
