import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Product } from '../components/Product.js';
import Dropdown from '../components/Dropdown.js';
import { getProducts, getProductTypes } from '../services/ProductsService.js';

export function ProductsList({ navigation }) {

  const [products, setProducts] = useState([]);
  const [data, setDropdown] = useState([]);
  const [reset, setReset] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const productsList = getProducts();
  const typesList = getProductTypes();

  const handleChange = value => {
    setReset(false);
    setSelected(value);
    let filteredProducts = productsList.filter(t => t.type == value.label);
    setProducts(filteredProducts);
  };

  const Reset = () => {
    setReset(true);
    setSelected(undefined);
    setProducts(productsList);
  };

  function renderProduct({ item: product }) {
    return (
      <View>
        <Product {...product}
          onPress={() => {
            navigation.navigate('ProductDetails', {
              productId: product.id,
            });
          }}
        />
      </View>
    );
  }

  useEffect(() => {
    setProducts(productsList);
    setDropdown(typesList);
  }, [productsList]);

  return (
    <View>

      <View style={styles.dropDownContainer}>
        <View style={styles.dropDown}>
          <Dropdown label="FILTER ITEMS" data={data} onSelect={handleChange} reset={reset} />
        </View>
        <View style={styles.reset}>
          <TouchableOpacity style={styles.resetBtn} onPress={Reset}>
            <Text>CLEAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  dropDown: {
    backgroundColor: '#fff',
    flex: 2,
  },
  reset: {
    backgroundColor: '#fff',
    flex: 1
  },
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  resetBtn: {
    // width: "80%",
    // borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 40,
    backgroundColor: "orange",
  },
});
