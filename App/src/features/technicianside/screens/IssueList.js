import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";

import MapView from "react-native-maps";

const Images = [
  { uri: "https://n.oneday.com.hk/im/ekrFnBeQNan.jpg" },
  { uri: "https://static.appledaily.hk/images/apple-photos/apple/20090321/large/21bb605p.jpg" },
  { uri: "https://www.oneday.com.hk/im/uIZazAIcRpo.jpg" },
  { uri: "https://upload.wikimedia.org/wikipedia/commons/b/bc/KLL1.jpg" }
]

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

mystate = {
  markers: [
    {
      coordinate: {
        latitude: 22.283252,
        longitude: 114.129899,
      },
      title: "Tung Hing Mansion",
      description: "Water Leakage Fix",
      image: Images[0],
    },
    {
      coordinate: {
        latitude: 22.283663,
        longitude: 114.127074,
      },
      title: "Manhattan Heights",
      description: "Sink Fix",
      image: Images[1],
    },
    {
      coordinate: {
        latitude: 22.282424,
        longitude: 114.126586,
      },
      title: "Kennedy Mansion",
      description: "Washroom pipe repair",
      image: Images[2],
    },
    {
      coordinate: {
        latitude: 22.280730,
        longitude: 114.127758,
      },
      title: "Kwun Lung Lau Block D",
      description: "Pipe leakage fix",
      image: Images[3],
    },
  ],
  region: {
    latitude: 22.2822,
    longitude: 114.1293,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  }
};

export default class screens extends Component {
  static navigationOptions = {
        title: 'Itinerary',
    };
  constructor(props) {
   super(props);
    this.state = { markers: [
      {
        coordinate: {
          latitude: 22.283252,
          longitude: 114.129899,
        },
        title: "Tung Hing Mansion",
        description: "Water Leakage Fix",
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 22.283663,
          longitude: 114.127074,
        },
        title: "Manhattan Heights",
        description: "Sink Fix",
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 22.282424,
          longitude: 114.126586,
        },
        title: "Kennedy Mansion",
        description: "Washroom pipe repair",
        image: Images[2],
      },
      {
        coordinate: {
          latitude: 22.280730,
          longitude: 114.127758,
        },
        title: "Kwun Lung Lau Block D",
        description: "Pipe leakage fix",
        image: Images[3],
      },
    ],
    region: {
      latitude: 22.2822,
      longitude: 114.1293,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    } 
    }
  }
  
  
  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
    //this.setState({markers: mystate.markers, region: mystate.region})
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
        {this.state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          const opacityStyle = {
            opacity: interpolations[index].opacity,
          };
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[styles.ring, scaleStyle]} />
                <View style={styles.marker} />
              </Animated.View>
            </MapView.Marker>
          );
        })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
        {this.state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {marker.description}
              </Text>
            </View>
          </View>
        ))}
        </Animated.ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

