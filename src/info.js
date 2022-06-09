import React from "react";
import {View, Text} from 'react-native';

import styled from "styled-components/native";

const Vconten = styled.View`
    background: grey;
    flex: 1;
`;

export default info = () => {

    return(
        <Vconten>
            <Text> Hola desde info</Text>
        </Vconten>
    );
};