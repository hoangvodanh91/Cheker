import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import {Image} from 'react-native'

export default class FriendTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Image
            source={require("../../images/icons/friend_tab.png")}
            style={{width : 24, height: 24, tintColor: "#822682" }}
        />

            //<Icon name="md-people" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is Friend Tab
                </Text>
            </Content>
        </Container>);
    }
}