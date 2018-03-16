import React, { Component } from 'react';
import { Container, Text, Content, Icon, ListItem ,Left, Right, Thumbnail, Body, Separator} from 'native-base';
import {SectionList, View, TouchableOpacity, TouchableHighlight,Button, Alert, Modal, Image} from 'react-native'
import VideoCall from '../videocall/VideoCall'

import contactList from '../../config/contactList'

export default class ContactTab extends Component {
    static navigationOptions = {
        title: "Danh ba",
        tabBarIcon: ({ tintColor }) => {
            return <Image
            source={require("../../images/icons/contact_tab.png")}
            style={{width : 24, height: 24, tintColor: "#822682" }}
          /> 
            //<Icon name="md-contact" style={{ color: tintColor }} />
        }
    }

    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
      

    onPress = () => {
		
		this.props.navigation.navigate('Chat')
		//Alert.alert('Touched')
    }

    onPressVideoCall = () => {


      this.setModalVisible(!this.state.modalVisible)
    }

    
    
    render() {
		return (
            <View>
            <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
         <VideoCall/>
          
        </Modal>
              
				<SectionList 
					sections={contactList}
					renderItem={({item})=>{
						return (
							<TouchableOpacity onPress={this.onPress}>
							<ListItem avatar>
							<Left>
								<Thumbnail source={{ uri: item.avatar_url }} />
							</Left>
							<Body>
								<Text>{item.name}</Text>
							</Body>
							<Right>
                            <Button
                                onPress={this.onPressVideoCall}
                                title="Call"
                                color="#841584"
                                />
							</Right>
							</ListItem>
							</TouchableOpacity>
						  );
                    }}
                    renderSectionHeader={({section})=>{
                        return (
                            <Separator bordered>
                                <Text>{section.title}</Text>
                            </Separator>
                        )
                    }}
				>
				</SectionList>
            </View>
	
		);
			
	}
}