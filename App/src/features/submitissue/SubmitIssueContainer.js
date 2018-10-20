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
} from 'react-native';
import Categories from '../../components/explore/Categories';
import categoriesList from '../../data/categories';
import colors from '../../styles/colors';

export default class SubmitIssueContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.heading}>
          What can we help you with today?
        </Text>
        <View style={styles.categories}>
          <Categories categories={categoriesList} navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
  },
  categories: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 5,
    color: colors.gray04,
  },
});
