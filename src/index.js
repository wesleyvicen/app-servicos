import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import OneSignal from 'react-native-onesignal';

import Routes from './routes';

// import { Container } from './styles';
import './config/reactoTronConfig';

export default class App extends Component {
  constructor(props) {
    super(props);
    OneSignal.init('4418b7b4-78be-455e-a200-ea7164f6788c');
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#E63946" />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </>
    );
  }
}
