import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../stack/home';
import CategoryStack from '../stack/category';
import SideMenuStack from '../stack/menu';

const Tab = createBottomTabNavigator();
const MainNav = ({navigation}) => {
  return (
      <Tab.Navigator 
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 5,
          width:30,
        },
      }}
      >
        <Tab.Screen
        name="Home"
        animationEnabled
        component={HomeStack}
        options={{
          tabBarLabel: 'Homepage',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen
          name="Category"
          animationEnabled
          component={CategoryStack}
          options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="microsoft" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          
          name="Menu"
          animationEnabled
          component={SideMenuStack}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      
  )
}

export default MainNav;