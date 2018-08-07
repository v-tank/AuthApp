import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCeYFTnzEnfX8vhR7XKwvqo7r-v-WVAG_I',
      authDomain: 'auth-830fb.firebaseapp.com',
      databaseURL: 'https://auth-830fb.firebaseio.com',
      projectId: 'auth-830fb',
      storageBucket: 'auth-830fb.appspot.com',
      messagingSenderId: '447696249907'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Login"/>
        <LoginForm />
      </View>
    )
  }
}

export default App;
