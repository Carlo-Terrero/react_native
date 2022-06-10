import React from "react";
import {StyleSheet ,View, Text} from 'react-native';
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";

export default info = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}> HOTEL INFO</Text>

            <Text style={styles.textElement}> RECEPTION PHONE NUMBER: +34 910 555 555</Text>
            <Text style={styles.textElement}> ROOM PHONE NUMBER: +34 910 555 555 #(ROOM NUMBER)</Text>
            <Text style={styles.textElement}> 24H HELPLINE: +34 910 555 555</Text>
            <Text style={styles.textElement}> ADDRESS: C/ DE LA PRINCESA, 31. MADRID 28008</Text>
            <Text style={styles.textElement}> EMERGENCY NUMBER: 112</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: `#333333`,
        flex: 1,
        alignItems: 'center',
    },
    textElement: {
        color: 'white',
        margin: 4,
    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 50

    }

});