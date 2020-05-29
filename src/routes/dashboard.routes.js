import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text} from 'react-native';
import Main from '../pages/Main';
import Teste from '../pages/Components/Teste';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function DashBoardRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#E63946"
      inactiveColor="#949494"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? '#E63946' : '#949494'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Teste"
        component={Teste}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="calendar"
              color={focused ? '#E63946' : '#949494'}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
