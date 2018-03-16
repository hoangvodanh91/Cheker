import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import {Image} from 'react-native'

export default class StoryTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Image
            source={require("../../images/icons/story_tab.png")}
            style={{width : 24, height: 24, tintColor: "#822682" }} 
            />
            //<Icon name="md-timer" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is Story Tab
                </Text>
            </Content>
        </Container>);
    }
}