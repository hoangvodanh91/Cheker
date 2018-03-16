import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import {Image, View} from 'react-native'
import FullScreenVideo from './FullScreenVideo'

import {
    RTCView,
    getUserMedia,
    MediaStreamTrack
  } from 'react-native-webrtc';


export default class VideoCall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            localViewSrc : null,
            remoteViewSrc: null,
        }

    }

    componentDidMount() {
        let isFront = true;
        MediaStreamTrack.getSources(sourceInfos => {
            console.log(sourceInfos);
            let videoSourceId;
            for (const i = 0; i < sourceInfos.length; i++) {
              const sourceInfo = sourceInfos[i];
              if(sourceInfo.kind == "video" && sourceInfo.facing == (isFront ? "front" : "back")) {
                console.log("sdfsadfasdf");
                videoSourceId = sourceInfo.id;
              }
            }
            getUserMedia({
              audio: true,
              video: {
                mandatory: {
                  minWidth: 500, // Provide your own width, height and frame rate here
                  minHeight: 300,
                  minFrameRate: 30
                },
                facingMode: (isFront ? "user" : "environment"),
                optional: (videoSourceId ? [{sourceId: videoSourceId}] : [])
              }
            }, function (stream) {
              
              console.log("Got Local Stream");
              this.setState({localViewSrc: stream.toURL()})
            }, (error) => {
              console.log("Get LocalStream Fail: ", error);
            });
          });
    }

    
    render() {
        return (
          <FullScreenVideo streamURL={this.state.localViewSrc} />
        );
    }
}