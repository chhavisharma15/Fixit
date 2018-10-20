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
import {
  List, ListItem, Left
} from 'native-base';
import colors from '../../../styles/colors';

export default class SelectType extends Component {
  static navigationOptions = {
    title: 'Unit Type',
  };

  render() {
    const types = this.props.navigation.state.params.types
    return ( 
      <View style={styles.wrapper}>
       <List
          dataArray={types}
          renderRow={item => (
            <ListItem style={styles.listItem}
              noIndent
              button
              onPress={()=>this.props.navigation.navigate('SelectIssue',{ issues: item.issues})}
            >
            <Left>
              <Text style={styles.text}>{item.type}</Text>
            </Left>
          </ListItem>)}
      />  
      </View>
    );
  }}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 50,
    color: colors.gray04,
  },
  listItem: {
    height: 70,
  },
  text: {
    fontSize: 17
  }
});
