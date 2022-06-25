import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export function Payment({ navigation }) {

  function setInput(value) {
    console.log(value);
  }

  function navigateToOrder() {
    navigation.navigate('Order');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <Text style={styles.label}>Card No:</Text>
          <TextInput style={styles.TextInput} onChangeText={(val) => setInput(val)} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Expiration:</Text>
          <TextInput style={styles.TextInput} onChangeText={(val) => setInput(val)} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>CVV:</Text>
          <TextInput style={styles.TextInput} onChangeText={(val) => setInput(val)} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Shipping Information:</Text>
          <TextInput style={styles.TextInput} onChangeText={(val) => setInput(val)} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>User Name:</Text>
          <TextInput style={styles.TextInput} onChangeText={(val) => setInput(val)} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput style={styles.TextInput} onChangeText={(val) => setInput(val)} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Address:</Text>
          <TextInput style={styles.textArea} onChangeText={(val) => setInput(val)}
            multiline={true} numberOfLines={4} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Email Id:</Text>
          <TextInput style={styles.TextInput} onChangeText={(val) => setInput(val)} />
        </View>


        <TouchableOpacity style={styles.paymentButton} onPress={navigateToOrder}>
          <Text style={styles.btnText}>PROCEED TO PAY AND SHIP THE PRODUCTS</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputView: {
    paddingVertical: 10,
    width: "80%",
  },

  TextInput: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    fontSize: 15,
    color: '#000',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5
  },
  textArea: {
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 15,
    color: '#000',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5
  },
  label: {
    fontSize: 16
  },
  paymentButton: {
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 10,
    color: "#fff",
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    fontSize: 15,
    marginBottom: 20
  },
});
