import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

function SellerInfo(props) {
  const { seller } = props;

  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={seller.sellerPic}
      />
      <View style={styles.sellerInfo}>
        <Text style={styles.userName}>{seller.sellerName}</Text>
        <View style={styles.rating}>
          <StarRating rating={seller.sellerRating} />
          <Text style={styles.questName}>{seller.title} reviews</Text>
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.transaction}>
            {seller.transactionNo} successful transactions
          </Text>
          <Text style={styles.items}>{seller.itemsNo} for sale</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    marginBottom: 30,
    paddingBottom: 10,
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
  },
  transactionInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  userName: {
    color: 'grey',
  },
  questName: {
    fontWeight: 'bold',
  },
  transaction: {
    height: 'auto',
    // wordWrap: 'wrap',
  },
  items: {
    textDecorationLine: 'underline',
  },
  image: {
    width: '10%',
    borderRadius: '50%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});

export default SellerInfo;
