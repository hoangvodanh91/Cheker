import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Text, Thumbnail , Content, List, Container, Header} from 'native-base';
import {Image} from 'react-native'
import ProfileUser from '../Profile'



export default class GeneralTab extends Component {
    static navigationOptions = {
        title: "Tổng quát",
        tabBarIcon: ({ tintColor }) => {
            return <Image
            source={require("../../images/icons/general_tab.png")}
            style={{width : 24, height: 24, tintColor: "#822682" }} 
            />
            //<Icon name="ios-add-outline" style={{ color: tintColor }} />
        }
    }
    handleClick = () => {
		
		this.props.navigation.navigate('ProfileUser')
		//Alert.alert('Touched')
    }
    
   

	render() {
       return (
        <Container>
           <Content>
            <List>
            <ListItem avatar button={true} onPress={this.handleClick}>
              <Left>
                <Thumbnail source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
              </Left>
              <Body>
                <Text>Jason Hoang</Text>
                <Text note>Trang cá nhân của bạn</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            </List>   
            </Content>
            </Container>
       )
	
			
	}
}