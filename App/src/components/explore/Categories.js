/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  FlatList,
} from 'react-native';
import { H3 } from 'native-base';
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
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item, index}) => (
        <TouchableHighlight
        key={`category-item-${index}`}
        underlayColor={colors.primary}
        onPress={() => this.props.navigation.navigate('SelectType', { types: item.types })}
        >
          <View
          style={styles.item}>
            <Icon name={item.icon} color={colors.primary} size={60}/>
            <H3 style={{color: colors.gray04, textAlign: 'center'}}>{item.name}</H3>
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
    width: 180
  }
});
