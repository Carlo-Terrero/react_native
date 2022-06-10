import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";

const dataBooking = {
    checkinDate: '12/04/22',
    checkoutDate: '16/04/22',
    NumGuests: 2,
    TotalPrice: 400
}

export default detail = ({navigation}) => {
    
    return(
        <View style={styles.container}>

            <Text style={styles.textTitle}>
                THANK YOU, YOU HAVE SUCCESSFULLY CHECKED IN
            </Text>

            <Text style={styles.textElement}> BOOKING DETAIL</Text>       
            <Text style={styles.textElement}> CHECKIN DATE: {dataBooking.checkinDate}</Text>       
            <Text style={styles.textElement}> CHECKOUT DATE: {dataBooking.checkoutDate}</Text>       
            <Text style={styles.textElement}> NUMBER OF GUESTS: {dataBooking.NumGuests}</Text>       
            <Text style={styles.textElement}> TOTAL PRICE {dataBooking.TotalPrice}€</Text>       

            <Button 
                style={styles.btn}
                title='DONE'
                color='#BEAD8E'
                onPress={() => navigation.navigate('Info')}
            />     
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: `#333333`,
        flex: 1,
        alignItems: 'center'
    },
    textElement: {
        color: 'white',
        margin: 4,
    },
    textTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 30
    },
    btn: {
        marginTop: 30,
    }
});