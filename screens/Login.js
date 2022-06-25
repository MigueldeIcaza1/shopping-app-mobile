import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Login({navigation}) {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setisFormValid] = useState(1);

  function LoginUser() {
    console.log(userName, password);
    if (userName == '123' && password == '123') {
        setisFormValid(1);
        navigation.navigate('Products');
    }
    else {
        setisFormValid(0);
    }
  };
 
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />

      {!isFormValid && 
        <View>
            <Text style={styles.invalid}>Invalid Credentails</Text>
            <Text style={styles.invalid2}>Enter UserName: 123, Password: 123</Text>
        </View>       
      }

      <View style={styles.inputView}>
      <Text>UserName</Text>        
        <TextInput
          style={styles.TextInput}
          placeholder="123"
          placeholderTextColor="#c2c0be"
          onChangeText={(userName) => setuserName(userName)}
        />
      </View>
 
      <View style={styles.inputView}>
       <Text>Password</Text> 
        <TextInput
          style={styles.TextInput}
          placeholder="123"
          placeholderTextColor="#c2c0be"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={LoginUser}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}  onPress={LoginUser}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
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
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  invalid: {
    color: 'red',
    fontSize: 15,
  },
  invalid2: {
    color: 'orange',
    fontSize: 12,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "orange",
  },
});