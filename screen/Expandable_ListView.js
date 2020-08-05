/* @flow */

import React, { Component } from 'react';
import { Alert, ActivityIndecator, LayoutAnimation, StyleSheet, View,
  Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,Linking } from 'react-native';
import Firebase from './Firebase.js'
import firebase from 'firebase'

export default class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {
      layout_Height: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {

    // Write your code here which you want to execute on sub category selection.
    let allLinkRef = firebase.firestore().collection('allLinks');

    allLinkRef.doc(item).get().then(doc => {
      if(doc.exists){
        const url = doc.data().url_prem;
        Linking.openURL(url).catch(err =>  console.error("Couldn't load page", err));
      }
    })
    .catch(err => console.error("Couldn't load page", err))

  }

  render() {
    return (
      <View style={styles.Panel_Holder}>

        <TouchableOpacity activeOpacity={0.6} onPress={this.props.onClickFunction}
         style={styles.category_View}>

          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>

          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png' }}
            style={styles.iconStyle} />

        </TouchableOpacity>

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={styles.sub_Category_Text}
               onPress={this.show_Selected_Category.bind(this, item.name)}>

                <Text> {item.name} </Text>

                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

              </TouchableOpacity>

            ))
          }

        </View>

      </View>

    );
  }
}


const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#F5FCFF',
  },

  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'

  },

  sub_Category_Text: {
    fontSize: 18,
    color: '#000',
    padding: 10
  },

  category_Text: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 21,
    padding: 10
  },

  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6A89CC'
  },

  Btn: {
    padding: 10,
    backgroundColor: '#F9DDA4'
  }

});
