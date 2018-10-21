import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from '../../../styles/colors';
import CameraView from './Camera.js';
import { Card, CardItem, Button } from 'native-base';


export default class AdditionalDetails extends React.Component {
  static navigationOptions = {
    title: 'Additional Details',
  };

  render() {
    return (
      <View style={styles.wrapper}>
          <CameraView>
            <View style={{flex: 1, flexDirection: 'column', alignItems:'center',  justifyContent: 'flex-end'}}>
              <Button style={styles.actionButton} light onPress={()=>this.props.navigation.navigate('Success')}><Text style={{color: colors.black}}>Add additional notes</Text></Button>
              <Button style={styles.actionButton} light onPress={()=>this.props.navigation.navigate('SubmitIssueContainer')}><Text style={{color: colors.black}}>Add another issue</Text></Button>
              <Button style={styles.actionButton} onPress={()=>this.props.navigation.navigate('Loading',{next:'Success', 'text':'Submitting your request...'})}><Text style={{color: colors.white}}>Continue</Text></Button>
            </View>
        </CameraView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 50,
    color: colors.gray04,
  },
  cameraView: {
    height: 300,
  },
  cameraButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: 100,
  },
  actionButton: {
    width: 413,
    height: 40,
    justifyContent: 'space-evenly'
  },
  text: {
    color: colors.white,
  }
});
