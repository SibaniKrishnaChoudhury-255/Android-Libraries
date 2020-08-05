/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Library from './Library'
import About from './About'
import Licence from './Licence'


const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style = {{height: 200}}>
        <Image
          style = {{flex:1 , width: undefined, height: undefined}}
          source = {require('../images/library.jpeg')}/>
      </View>
      <DrawerItemList {...props} />

    </DrawerContentScrollView>

  );
}


export default function DrawerContainer(){
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Library" component={Library} />
        <Drawer.Screen name="Licence" component={Licence} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
}
