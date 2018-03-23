import React, { Component } from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image} from 'react-native';
import {RTCView} from 'react-native-webrtc';
import config from "../../config/app";

export default class Thumbnail extends Component {

  
    render() {
        return(
        <View style={styles.container}>
            {
                config.useRCTView ?
                <RTCView streamURL={this.props.streamURL} style={styles.thumbnail} />
                :
                <Image source={this.props.streamURL} style={styles.thumbnail} resizeMode={"contain"} />
            }
        </View>
        )
  }

}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        borderWidth: 1, borderColor: "red",
        height: config.thumbnailHeight,
        width: config.thumnailWidth,
        top: 0,
        right: 0
      },  
      thumbnail: {
        width: config.thumnailWidth,
        height: config.thumbnailHeight
      },
})