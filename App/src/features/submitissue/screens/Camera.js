import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from 'expo';
import { Button } from 'native-base';


export default class CameraView extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    this.pause.bind(this);
  }

  pause = async () => {
    if (this.camera) {
      this.camera.pausePreview();
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
          <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingTop: 20,
              }}>
              <Button
              light
              rounded
              style={{
                height: 30,
                width: 80,
                justifyContent: 'space-around'
              }}
              onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}
              >
                  <Text style={{ color: 'black', fontSize: 17}}>Flip</Text>
              </Button>
              <Button
              rounded
              light
              style={{
                height: 30,
                width: 80,
                justifyContent: 'space-around'
              }}
              onPress={()=>this.pause().then(()=>console.log('preview paused'))}
              >
                  <Text style={{ color: 'black', fontSize: 17}}>Take</Text>
              </Button>
          </View>
          {this.props.children}
          </Camera>
          </View>
      );}}}