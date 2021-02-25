/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/firestore";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const firebaseConfig = {
  apiKey: "AIzaSyBwe0jHdUYd4_45on7eDGBAGO56vYwNsos",
  authDomain: "mylittlecrepe-169d2.firebaseapp.com",
  projectId: "mylittlecrepe-169d2",
  storageBucket: "mylittlecrepe-169d2.appspot.com",
  messagingSenderId: "856912813849",
  appId: "1:856912813849:web:663312a426bcd857392f88",
  measurementId: "G-FPBX172L96"
};

if (!firebase.apps.length) {
  const test = firebase.initializeApp(firebaseConfig);
  console.log("DOND ?", test);
  
} else {
  console.log("already exist");
  
}
class App extends React.Component {


  render() {
      return (
        <View >
          <Text>Hello worlds</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
});

export default App;
