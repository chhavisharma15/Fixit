import React, { Component } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from '../../../styles/colors';

const data = [
  {
    price: "HK$ 100",
    title: "Repair immediately"
  },
  {
    price: "HK$ 80",
    title: "Repair within 3 days"
  },
  {
    price: "HK$ 50",
    title: "Repair within 7 days"
  }
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingTop: 20,
    color: colors.gray04,
  }
});

export default class SelectPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  static navigationOptions = {
    title: 'Price',
  };

  render() {
    return (
      <View style={styles.wrapper}>
      <Text style={styles.heading}>
          Which price plan would you like?
      </Text>
      <FlatList
        data={this.state.data}
        renderItem={({ item: rowData, index }) => {
          return (
            <Card
              key={index}
              title={rowData.title}
              style={{marginLeft:0,marginRight:0}}
            >
            <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
              {rowData.price}
            </Text>
            <Button
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='SELECT'
            onPress={()=>this.props.navigation.navigate('AdditionalDetails')}
            />
            </Card>
          );
        }}
        keyExtractor={(item, index) => 'card'+index}
      />
      </View>
    );
  }
}