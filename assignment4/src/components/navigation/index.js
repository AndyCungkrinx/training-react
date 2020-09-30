import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../stack/home';
import CategoryStack from '../stack/category';
import SideMenuStack from '../stack/menu';

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'ProductCategory') {
    return false;
  }

  return true;
}

const MainNav = () => {
  return (
      <Tab.Navigator 
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#ffff',
        inactiveTintColor: '#c9c9c9',
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          backgroundColor: '#ff7c2b',
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
          options={({ route }) => ({
            tabBarVisible: getTabBarVisibility(route),
            tabBarLabel: 'Category',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="microsoft" color={color} size={size} />
            ),
          })}
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