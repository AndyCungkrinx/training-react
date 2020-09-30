import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Provider as PaperProvider} from 'react-native-paper';
import SideMenu from '../sidemenu';


const Drawer = createDrawerNavigator();

export default function SideMenuDrawer() {
  return (
    <PaperProvider>
    <Drawer.Navigator initialRouteName="Menu">
      <Drawer.Screen
        name="Menu"
        component={SideMenu}
      />
    </Drawer.Navigator>
    </PaperProvider>
  );
}