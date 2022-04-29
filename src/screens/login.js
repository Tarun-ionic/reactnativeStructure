import React, { useState } from "react";
import { courseApi } from "../providers/course.api";
import  { commonFunction }  from "../providers/common.service";
import  { localStorage }  from "../providers/localStorageProvider"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginSubmit = async() =>{
    const reqData = {'email':email,'password':password,'device_token':'test'};
    commonFunction.withoutTokenPost(courseApi.LOGIN,reqData).then((response) => {
      console.log('login success', response);
      localStorage.setItemObject('userToken',response.accessToken)
      setTimeout(()=>{getUSerProfile();},1000)
    }).catch((error)=>{
     if(error.response && error.response.data)
      console.log('login error', JSON.stringify(error.response.data));
    })
  }

  const getUSerProfile = async()=>{
    console.log("profile function")
    commonFunction.withTokenGet(courseApi.GET_PROFILE).then((response) => {
      console.log('profle success', response);
    }).catch((error)=>{
      if(error.response && error.response.data)
      console.log('profle error', JSON.stringify(error.response.data));
    })
  }
  

  return (
    <View style={styles.container}>

    <View style={styles.inputView}>
    <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
    />
    </View>

    <View style={styles.inputView}>
    <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
    />
    </View>

    <TouchableOpacity>
    <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{loginSubmit()}} style={styles.loginBtn}>
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
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});