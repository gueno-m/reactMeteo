import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import soleil from '../assets/soleil.gif';

const styles = StyleSheet.create({

    contenu: {
        flex: 1,
        flexDirection: 'column',
    },

    localisation: {
        width: 'auto',
        height: 'auto',
        flex: 2,
        flexDirection: 'column',
        margin: 'auto',
        marginTop: 50,
        marginRight: 0,
        marginBottom: 0,
    },

    date: {
        textAlign: 'right',
        margin: 'auto',
        color: 'white',
        fontSize: 20,
    },

    ville: {
        textAlign: 'right',
        margin: 'auto',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },

    heure: {
        textAlign: 'right',
        margin: 'auto',
        color: 'white',
        fontSize: 20,
    },

    image: {
        margin: 'auto',
        marginTop: -50,
        width: 350,
        height: 350,
    },

    description: {
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontSize: 30,
    },

    temperature: {
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontSize: 80,
    },
});

export default function Home() {
    return (
        <View style={styles.contenu}>
            <View style={styles.localisation}>
                <Text style={styles.date}>Jeudi 19 Mars</Text>
                <Text style={styles.ville}>THIAIS</Text>
                <Text style={styles.heure}>12:30</Text>
            </View>
            <Text style={styles.description}>Ensoleillé</Text>
            <Image style={styles.image}
                source={soleil}
            />
            <Text style={styles.temperature}>19°C</Text>
        </View>
    );
}