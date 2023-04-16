import React from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';
import StarRating from 'react-native-star-rating-widget';

function SellerInfo(props) {
  const { seller } = props;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={seller.sellerPic}
      />
      <View style={styles.sellerInfo}>
        <Text style={styles.userName}>{seller.sellerName}</Text>
        <View style={styles.rating}>
          <StarRating
            rating={seller.sellerRating}
            starSize={18}
            fullStarColor="gold"
            emptyStarColor="#ccc"
            disabled
            starStyle={styles.star}
          />
          <Text style={styles.questName}>
            {seller.reviewNo}
            {' '}
            reviews
          </Text>
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transaction}>
            {seller.transactionNo}
            {' '}
            sales
          </Text>
          <Text style={styles.items}>
            {seller.itemsNo}
            {' '}
            for sale
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'green',
    borderRadius: 8,
    marginBottom: 30,
    paddingBottom: 10,
    alignItems: 'center',
  },
  sellerTitle: {
    alignItems: 'baseline',
    paddingLeft: 10,
    // borderWidth: 1,
    // borderColor: 'green',
  },
  sellerInfo: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 8,
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 4,
  },
  star: {
    marginRight: 2,
  },
  transactionInfo: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 4,
  },
  userName: {
    marginTop: 4,
    color: 'grey',
    alignItems: 'flex-end',
  },
  questName: {
    fontWeight: 'bold',
    marginLeft: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  transaction: {
    flex: 1,
    height: 'auto',
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    textDecorationLine: 'underline',
  },
  image: {
    width: '10%',
    borderRadius: '50%',
    height: undefined,
    aspectRatio: 1,
    margin: 8,
    marginTop: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignSelf: 'flex-start',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});

export default SellerInfo;
