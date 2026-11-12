import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({poster, name, description}) => {
    return (
        <View style={styles.card}>

            <View style={styles.header}>
                <FontAwesome6 name="ship" size={22} color="black"/>
                <Text style={styles.boatName}>{name}</Text>
            </View>

            <Text style={styles.description}>{description}</Text>

            <Image source={poster} style={styles.boatImage}/>

        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 12,
        borderRadius: 5,
        width: '100%',
    },

    boatName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginLeft: 10,
        flexShrink: 1,
    },

    description: {
        fontSize: 14,
        color: 'dimgray',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
        lineHeight: 21,
    },

    boatImage: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
        borderRadius: 8,
    },
});

export default Boat;
