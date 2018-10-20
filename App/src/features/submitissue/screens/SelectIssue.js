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
  List, ListItem, CheckBox, Body
} from 'native-base';
import { Button } from "react-native-elements";
import colors from '../../../styles/colors';

export default class SelectIssue extends Component {
  static navigationOptions = {
    title: 'Issue',
  };

  render() {
    const issues = this.props.navigation.state.params.issues;
    return ( 
      <View style={styles.wrapper}>
        <ListItem
              noIndent
              style={styles.listItem}
            >
            <CheckBox checked={true} />
            <Body>
              <Text style={styles.text}>Ask technician to assess the problem</Text>
            </Body>
          </ListItem>
        <ListItem itemDivider />
        <List
          dataArray={issues}
          renderRow={item => (
            <ListItem
              noIndent
              style={styles.listItem}
            >
            <CheckBox checked={false} />
            <Body>
              <Text style={styles.text}>{item}</Text>
            </Body>
          </ListItem>)}
      />
      <Button
        backgroundColor='#03A9F4'
        title='CONTINUE'
        style={styles.button}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        onPress={()=>this.props.navigation.navigate('Loading',{next:'SelectPrice'})}
        />
      </View>
    );
  }}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    paddingLeft: 10,
    fontSize: 17
  },
  button: {
    paddingBottom: 20
  }
});
