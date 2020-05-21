import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import CodePush from 'react-native-code-push';

import Routes from './routes';

// import { Container } from './styles';
import './config/reactoTronConfig';

const app = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E63946" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(app);
