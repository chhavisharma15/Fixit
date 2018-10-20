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
import colors from '../../../styles/colors';
import {Spinner} from 'native-base';

export default class Loading extends Component {
    componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate(this.props.navigation.state.params.next);
    }, 2000);
    }

    componentDidUpdate() {
    setTimeout(() => {
        this.props.navigation.navigate(this.props.navigation.state.params.next);
    }, 2000);
    }

  render() {
    return (
      <View style={styles.wrapper}>
      <Spinner style={styles.otherparty} color='green'/>
        <Text style={styles.party}>Optimizing prices for you...</Text>
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
  party: {
      textAlign: 'center',
      paddingTop: 40
  },
  otherparty: {
      paddingTop: 300
  }
});
