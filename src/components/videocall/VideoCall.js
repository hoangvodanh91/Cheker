import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import {Image, View} from 'react-native'
import FullScreenVideo from './FullScreenVideo'
import Thumbnail from './Thumbnail'
/*
import {
		RTCView,
		getUserMedia,
		MediaStreamTrack,
		RTCPeerConnection,
	} from 'react-native-webrtc';


var pc; 
*/
/*
//our username 
var name; 
var connectedUser;
  
//connecting to our signaling server
var conn = new WebSocket('ws://ancient-reaches-48479.herokuapp.com/');
  
conn.onopen = function () { 
   console.log("Connected to the signaling server"); 
};
  
//when we got a message from a signaling server 
conn.onmessage = function (msg) { 
   console.log("Got message", msg.data);
	
   var data = JSON.parse(msg.data); 
	
   switch(data.type) { 
      case "login": 
         //handleLogin(data.success); 
         break; 
      //when somebody wants to call us 
      case "offer": 
         handleOffer(data.offer, data.name); 
         break; 
      case "answer": 
         handleAnswer(data.answer); 
         break; 
      //when a remote peer sends an ice candidate to us 
      case "candidate": 
         handleCandidate(data.candidate); 
         break; 
      case "leave": 
         //handleLeave(); 
         break; 
      default: 
         break; 
   }
};
  
conn.onerror = function (err) { 
   console.log("Got error", err); 
};
  
//alias for sending JSON encoded messages 
function send(message) { 
   //attach the other peer username to our messages 
   if (connectedUser) { 
      message.name = connectedUser; 
   } 
	
   conn.send(JSON.stringify(message)); 
};
*/
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
			/*

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
				const { params } = this.props.navigation.state;
				var callToUsername = params.name;
				if (callToUsername.length > 0) { 
					connectedUser = callToUsername;

				pc.createOffer((desc) => {
					
					
						send({ 
							type: "offer", 
							offer: offer 
					}); 
					pc.setLocalDescription(desc, () => {
							// Send pc.localDescription to peer
							console.log('pc.setLocalDescription');
					}, (e) => { throw e; });
				
			}, (e) => { throw e; });
		}

			pc.onicecandidate = (event) => {
					// send event.candidate to peer
					console.log('onicecandidate', event);
			};
			*/
		}

	
		render() {

			/* 2. Read the params from the navigation state */
			
			const { params } = this.props.navigation.state;
			const name = params ? params.name : null;
			
				return (
					
        			//<Text>dsfasdfasdf</Text>
       
  
					
					
					<View>
					<FullScreenVideo streamURL={this.state.localViewSrc} />
					<Thumbnail streamURL={this.state.remoteViewSrc} />
					
					</View>

				

					
				
				);
		}

		// websocket callback

/*
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
*/

}

