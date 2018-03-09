import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class ContactTab extends Component {
    static navigationOptions = {
        title: "NativeBase Example123",
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-contact-outline" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is Contact Tab
                </Text>
            </Content>
        </Container>);
    }
}