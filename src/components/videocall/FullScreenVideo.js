import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image} from 'react-native';
import {RTCView} from 'react-native-webrtc';
import config from '../../config/app'

export default class FullScreenVideo extends Component{

  render() {
    return(
        <View style={styles.container}>
        {
            config.useRCTView ?
            <RTCView streamURL={this.props.streamURL} style={styles.video} />
            :
            <Image source={this.props.streamURL} style={styles.video} resizeMode={"contain"} />
        }
        </View>
    )   
  }
}

const styles = StyleSheet.create({
    container: {
        width: config.screenWidth,
        height: config.screenHeight
      },
      video: {
        width: config.screenWidth,
        height: config.screenHeight
      }

})