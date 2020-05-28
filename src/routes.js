import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import { Container } from './styles';

import Main from './pages/Main';
import User from './pages/User';
import SubCategory from './pages/Components/SubCategories';

const Stack = createStackNavigator();

const src = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#E63946', height: 80},
        headerTitleAlign: 'center',
        headerTintColor: '#f5f5f5',
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
      <Stack.Screen
        name="SubCategory"
        component={SubCategory}
        options={({route}) => ({title: route.params.name, color: 'white'})}
      />
    </Stack.Navigator>
  );
};

export default src;
