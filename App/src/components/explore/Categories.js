/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text,
  FlatList,
  Dimensions
} from 'react-native';
import colors from '../../styles/colors';
import iPhoneSize from '../../helpers/utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === 'small') {
  cardSize = 90;
  cardMargin = 4;
} else if (size === 'large') {
  cardSize = 115;
}

const numColumns = 2;

export default class Categories extends Component {

  
  render() {
    const { categories, navigate } = this.props;
  	return (
      <FlatList contentContainerStyle={styles.wrapper}
      data={categories}
      renderItem={({item, index}) => (
        <TouchableHighlight
        key={`category-item-${index}`}
        onPress={() => this.props.navigation.navigate('SelectType', { types: item.types })}
        >
          <View
          style={styles.item}>
            <Icon name={item.icon} color={colors.green01} size={60}/>
            <Text>{item.name}</Text>
          </View>
      </TouchableHighlight>
      )}
      keyExtractor={item => item.name}
      numColumns={numColumns} />
  	);
  }
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    marginBottom: 50,
    width: 200
  },
  itemSelect: {
    backgroundColor: '#DDDDDD',
  }
});
