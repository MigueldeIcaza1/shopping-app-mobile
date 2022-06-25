import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { Payment } from './screens/Payment.js';
import { Order } from './screens/Order.js';
import Login from './screens/Login.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}
            options={({ navigation }) => ({
              title: 'Login',
              headerTitleStyle: styles.headerTitle
            })} />
          <Stack.Screen name='Products' component={ProductsList}
            options={({ navigation }) => ({
              title: 'Products',
              headerLeft: null,
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />
            })} />
          <Stack.Screen name='ProductDetails' component={ProductDetails}
            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })} />
          <Stack.Screen name='Cart' component={Cart}
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle
            })} />
          <Stack.Screen name='Payment' component={Payment}
            options={({ navigation }) => ({
              title: 'Payment',
              headerTitleStyle: styles.headerTitle
            })} />
          <Stack.Screen name='Order' component={Order}
            options={({ navigation }) => ({
              title: 'Order',
              headerTitleStyle: styles.headerTitle
            })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
