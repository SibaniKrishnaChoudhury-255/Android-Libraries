/* @flow */

import React, { Component } from 'react';
import {
  Alert, ActivityIndicator,
  LayoutAnimation,
  StyleSheet, View,
  Text, ScrollView,
  UIManager, TouchableOpacity,
  Platform, Image } from 'react-native';

import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import Firebase from './Firebase.js'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import Expandable_ListView from './Expandable_ListView'

import {decode, encode} from 'base-64';



if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }


export default class Library extends Component{

  constructor() {
      super();

      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
      }

      this.state={
        AccordionData : [],
        loading:true
      }
  }

  componentDidMount(){
      let allRef = firebase.firestore().collection('list');

      allRef.doc("allList").get().then(doc => {
        if(doc.exists){
          const array = doc.data().library;
          this.setState({ loading: false, AccordionData: [...array]})

        }
      })
      .catch(error => console.log(error))

    }

  update_Layout = (index) => {

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

      const array = [...this.state.AccordionData];

      array[index]['expanded'] = !array[index]['expanded'];

      this.setState(() => {
        return {
          AccordionData: array
        }
      });
    }

  allLibraryList = () => {
    if(this.state.loading){
          return(
            <ActivityIndicator style = {{alignItems: 'center', justifyContent: 'center'}}
             size="large" color="#0A79DF" />
          )
        }else{
        return (
          <View style={styles.MainContainer}>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
              {
                this.state.AccordionData.map((item, key) =>
                  (
                    <Expandable_ListView key={item.category_Name}
                     onClickFunction={this.update_Layout.bind(this, key)}
                     item={item} />
                  ))
              }
            </ScrollView>

          </View>
        )}
  }

    render(){
      return (
      <View style={styles.container}>
        <Header style = {{backgroundColor: '#3C40C6'}}>
          <Left>
            <Button
             transparent
             onPress = {() => this.props.navigation.toggleDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Library Bazaar</Title>
          </Body>
        </Header>

        <View>
          {this.allLibraryList()}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
