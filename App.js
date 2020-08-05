import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import DrawerContainer from './screen/DrawerContainer'

import { createDrawerNavigator } from '@react-navigation/drawer';

import { Root } from "native-base";
import { AppLoading } from "expo";
import * as Font from 'expo-font'



const Drawer = createDrawerNavigator();

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render(){
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
    <NavigationContainer>

      <DrawerContainer />
    </NavigationContainer>
  );
 }
}
