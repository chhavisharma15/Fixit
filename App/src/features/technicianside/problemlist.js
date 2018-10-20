import React, { Component } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-elements";
import colors from '../../styles/colors';

const data = [
  {
    description: "The tap on the sink is constantly leaking",
    title: "Water Leakage Fix",
    imageuri: "https://media-cdn.tripadvisor.com/media/photo-s/02/37/83/46/broken-taps.jpg"
  },
  {
    description: "The sink seems to have cracked",
    title: "Sink Fix",
    imageuri: "https://media-cdn.tripadvisor.com/media/photo-s/0f/d3/29/4b/broken-sink-water-would.jpg"
  },
  {
    description: "Washroom pipe is leaking",
    title: "Washroom pipe repair",
    imageuri: "https://i.stack.imgur.com/HE7Te.jpg"
  },
  {
    description: "Broken kitchen pipine, needs urgent repair",
    title: "Kitchen pipe repair",
    imageuri: "https://i.stack.imgur.com/jBxOV.jpg"
  }
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 50
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 50,
    color: colors.gray04,
  }
});



export default class ProblemList extends Component {
  static navigationOptions = {
    title: 'Issues Assigned',
  };
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    const { ProblemList, navigate } = this.props;
    return (
      <View style={styles.wrapper}>
      <Text style={styles.heading}>
          Issues assigned to you
      </Text>
      <FlatList
        data={this.state.data}
        renderItem={({ item: rowData, index }) => {
          return (
            <Card
              key={index}
              title={rowData.title}
              style={{marginLeft:0,marginRight:0}}
              image={{uri: rowData.imageuri}}
            >
            <Text style={{marginBottom: 10, textAlign: 'center', fontSize: 20}}>
              {rowData.description}
            </Text>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />
      <Button
      onPress={() => this.props.navigation.navigate('MapRedirect')}
      title="Plan a route"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}
