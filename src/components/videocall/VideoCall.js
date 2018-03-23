import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import {Image, View} from 'react-native'
import FullScreenVideo from './FullScreenVideo'
import Thumbnail from './Thumbnail'

const webRTCServices = require("../../services/webRTCServices");

import {
		RTCView,
		getUserMedia,
		MediaStreamTrack,
		RTCPeerConnection,
	} from 'react-native-webrtc';


var pc; 

export default class VideoCall extends Component {

		constructor(props) {
				super(props);
				this.state = {
						isFront: true,
						localViewSrc : null,
						remoteViewSrc: null,
				}

		}

		static navigationOptions = {
			tabBarVisible: false,
			swipeEnabled: false,

		}

		componentDidMount() {

			const configuration = { "iceServers": [{ "url": "stun:stun.l.google.com:19302" }] };
			pc = new RTCPeerConnection(configuration);
			const { isFront } = this.state;
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
					}, (stream) =>{
						
						console.log("Got Local Stream");
						this.setState({localViewSrc: stream.toURL()})
					}, (error) => {
						console.log("Get LocalStream Fail: ", error);
					});
				});

				pc.createOffer((desc) => {
					const { params } = this.props.navigation.state;
					var callToUsername = params.name;
						send({ 
							type: "offer", 
							offer: offer 
					}); 
					pc.setLocalDescription(desc, () => {
							// Send pc.localDescription to peer
							console.log('pc.setLocalDescription');
					}, (e) => { throw e; });
			}, (e) => { throw e; });

			pc.onicecandidate = (event) => {
					// send event.candidate to peer
					console.log('onicecandidate', event);
			};
		}

		
		render() {
				return (
					<View>
						<Thumbnail streamURL={this.state.localViewSrc} />
						<FullScreenVideo streamURL={this.state.remoteViewSrc} />

					</View>
				
				);
		}

		// websocket callback


		//when somebody sends us an offer 
 handleOffer(offer, name) { 
	connectedUser = name; 
	pc.setRemoteDescription(new RTCSessionDescription(offer));
 
	//create an answer to an offer 
	pc.createAnswer(function (answer) { 
		 pc.setLocalDescription(answer); 
	 
		 send({ 
				type: "answer", 
				answer: answer 
		 }); 
	 
	}, function (error) { 
		 alert("Error when creating an answer"); 
	}); 
};
 
//when we got an answer from a remote user 
 handleAnswer(answer) { 
	pc.setRemoteDescription(new RTCSessionDescription(answer));
}; 

//when we got an ice candidate from a remote user 
 handleCandidate(candidate) { 
	pc.addIceCandidate(new RTCIceCandidate(candidate)); 
};
}