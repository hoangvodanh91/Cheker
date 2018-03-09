import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class GeneralTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="ios-add-outline" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is General Tab
                </Text>
            </Content>
        </Container>);
    }
}