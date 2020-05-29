import React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// import { Container } from './styles';

//import Main from './pages/Main';
import User from './pages/User';
import SubCategory from './pages/Components/SubCategories';
import DashBoardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        component={DashBoardRoutes}
        options={{
          title: '',
          color: 'white',
          headerStyle: {backgroundColor: 'transparent', height: 0},

          transparentCard: true,
        }}
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

export default Routes;
