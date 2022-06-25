import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { CartContext } from '../CartContext';

export function Cart({ navigation }) {

  const { items, getItemsCount, getTotalPrice, addItemToCart, removeFromCart } = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>
      </View>
    );
  }

  function navigateToShopping() {
    navigation.navigate('Products');
  }

  function navigateToPayment() {
    navigation.navigate('Payment');
  }

  function incrementCount(id) {
    addItemToCart(id);
  }

  function decrementCount(id) {
    removeFromCart(id);
  }

  function renderItem({ item }) {
    return (
      <View>
        <View style={styles.cartLine}>
          <Image style={styles.thumb} source={item.image} />
          <View style={styles.update}>
            <TouchableOpacity style={styles.decrementButton} onPress={() => decrementCount(item.id)}>
              <Text style={styles.btnText2}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.decrementButton} onPress={(t) => incrementCount(item.id)}>
              <Text style={styles.btnText2}>+1</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.backgroundColor}>
      {items && items.length > 0 &&
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />}

      {items && items.length > 0 &&
        <TouchableOpacity style={styles.paymentButton} onPress={navigateToPayment}>
          <Text style={styles.btnText}>PROCEED TO PAYMENT</Text>
        </TouchableOpacity>
      }

      <TouchableOpacity style={styles.shoppingButton} onPress={navigateToShopping}>
        <Text style={styles.btnText}>BACK TO SHOPPING</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFF'
  },
  update: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    width: '50%'
  },
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333'
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  paymentButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 10,
    color: "#fff",
    backgroundColor: "orange",
  },
  shoppingButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 10,
    color: "#fff",
    backgroundColor: "#007bff",
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 40,
  },
  btnText2: {
    color: '#007bff',
    fontSize: 15,
    lineHeight: 40,
  },
  thumb: {
    height: 150,
    width: '50%',
    resizeMode: 'contain',
    alignItems: "start",
    justifyContent: "start",
    // width: '100%',
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,
  },
  decrementButton: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    color: "#007bff",
    width: 30,
    // backgroundColor: "#007bff",
    paddingHorizontal: 5,
    marginRight: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#007bff",
  },
  incrementButton: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    color: "#fff",
    width: 30,
    backgroundColor: "#007bff",
    paddingHorizontal: 5
  }
});
