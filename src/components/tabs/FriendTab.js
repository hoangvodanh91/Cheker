import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class FriendTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-people" style={{ color: tintColor }} />
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