/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import colors from '../../../styles/colors';

export default class SelectIssues extends Component {
  render() {
    return ( 
      <View style={styles.wrapper}>
        <Text style={styles.heading}>
          Your problem is being processed.
        </Text>  
        <Text style={styles.heading}>
          We will Fixit!
        </Text>
      </View>
    );
  }}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 50,
    color: colors.gray04,
  },
});
