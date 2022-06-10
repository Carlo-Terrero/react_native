
import React from 'react';
import {StyleSheet, Button, View, Text, TextInput} from 'react-native';

export default home = ({navigation}) => {

    return(
        <View style={styles.container}>
            <View style={styles.conteinerText}>
                <Text style={styles.textElement}>
                    Booking Reference
                </Text>
                
                <TextInput style={styles.inputElement}/>
            </View>      
            
            <Button 
                title='CHECK IN'
                color='#BEAD8E'                
                onPress={() => navigation.navigate('Detail')}
                
            />            
            
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: `#333333`,
        flex: 1,
        alignItems: 'center',
    },
    conteinerText: {
        marginTop: 80,
    },
    textElement: {
        color: 'white'
    },
    inputElement: {
        color: 'white',
       /*  backgroundColor: 'blue', */
       borderBottomWidth: 3,
       borderBottomColor: `#BEAD8E`,
       marginBottom: 30
    }
});

/* import React from 'react';
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
}; */