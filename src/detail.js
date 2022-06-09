import React from "react";
import {View, Text} from "react-native";

import styled from "styled-components/native";

const Vconten = styled.View`
    background: grey;
    flex: 1;
`;

export default detail = () => {
    
    return(
        <Vconten>
            <Text> Hola desde detail</Text>            
        </Vconten>
    );
};