import React from 'react';
import {Button, View, Text} from 'react-native';

import styled from 'styled-components/native';


const SButton = styled.Button`
    background: green;
    color: red;
    width: 25px;
    flex: 0.1;
`;
const Stext = styled.Text`
    color: white;
`;

const Sview = styled.View`
    background: grey;  
    flex: 1
`;

export default home = ({navigation}) => {

    return(
        <Sview>
            <SButton 
                title = "Detail"
                onPress = {() =>
                    navigation.navigate('Detail')
                }
            />
            <SButton 
                title = "Info"
                onPress = {() =>
                    navigation.navigate('Info')
                }
            />
            <Stext>Hola desde home 2</Stext>

            <SButton
                title = 'Hola'
            />
        </Sview>
        
    );
};