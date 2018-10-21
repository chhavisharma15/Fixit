/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import colors from '../../../styles/colors';
import { Container, Content, H1, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SelectIssues extends Component {
  static navigationOptions = {
    title: 'Success',
  };

  render() {
    return ( 
      <Container>
        <Content style={styles.wrapper}>
          <Icon name={'bulletin-board'} color={colors.primary} size={150} style={{alignItems:'center'}}/>
          <H1 style={{color:colors.primary}}>
            Your request is being processed. You will be notified soon with the right match to solve your requested issue.
          </H1>
        </Content>
      </Container>
    );
  }}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: 20,
  }
});
