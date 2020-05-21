import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import { Container } from './styles';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

const src = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#E63946', height: 80},
        headerTitleAlign: 'center',
        headerTintColor: '#F1FAEE',
        headerPressColorAndroid: 'white',
      }}>
      <Stack.Screen
        name="DashBoard"
        component={Main}
        options={{title: 'Dashboard', color: 'white'}}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={({route}) => ({title: route.params.name, color: 'white'})}
      />
    </Stack.Navigator>
  );
};

export default src;
