/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';

import { SocialIcon } from 'react-native-elements'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class About extends Component {

  socialClickFunction = (url) => {
    Linking.openURL(url).catch(err =>  console.error("Couldn't load page", err));
  }

  render() {
    return (
      <View style={styles.column}>

        <Header style = {{backgroundColor: '#FFFFFF'}}>
          <Left>
            <Button
              transparent light
             onPress = {() => this.props.navigation.goBack()}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>      </Title>
          </Body>
        </Header>

        <View style={[{marginTop: 15},styles.row]}>
            <Text style={styles.subTitle}>Developer- Prem Mehta</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.subTitle}>App Version- 1.0</Text>
        </View>
        <View style = {{marginHorizontal: 10, marginTop: 20}}>
          <Text style={styles.Maintitle}>Connect With Me</Text>
          <View style={[{marginTop: 10},styles.row]}>
            <SocialIcon
              type='facebook'
              onPress={()=>{this.socialClickFunction("https://www.facebook.com/profile.php?id=100018168708977")}}
              />
            <SocialIcon
              type='linkedin'
              onPress={() => {this.socialClickFunction("https://www.linkedin.com/in/premmehta/")}}
              />
            <SocialIcon
              type='github'
              onPress={() => {this.socialClickFunction("https://github.com/PremMehta01")}}
              />

          </View>
          <Text style={[{marginTop: 10},styles.Maintitle]}>About App</Text>
          <Text style={styles.subTitle}>This application is the collection of all the open source libraries for Android
           developed by me, in thought of learning and supporting open source community.{'\n'}
           You can easily find all the library with its how? and where? answered
           in the home page of the app. Feel free to use these libraries for any purpose.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
  row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  Maintitle:{
    fontSize:20,
    fontWeight: 'bold'

  },
  subTitle:{
      fontSize:17,
      marginLeft:8
  }
});
