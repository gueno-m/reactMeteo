import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Previsions from './Previsions';
import soleil from '../assets/soleil.gif';

const styles = StyleSheet.create({

    contenu: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    localisation: {
        width: 'auto',
    },

    date: {
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontSize: 20,
    },

    ville: {
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },

    heure: {
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontSize: 20,
    },

    temps: {
        width: '80%',
        height: 'auto',
        marginTop: 0,
        borderColor: '#FFFFFF',
        borderWidth: 3,
        padding: 10,
        alignContent: 'center',
    },

    image: {
        margin: 'auto',
        marginTop: 0,
        width: 200,
        height: 200,
    },

    description: {
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontSize: 20,
    },

    temperature: {
        textAlign: 'center',
        margin: 'auto',
        marginTop: 0,
        marginBottom: 0,
        color: 'white',
        fontSize: 50,
    },
});

export default function Home() {

    let date = new Date();
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const day = week[date.getDay()]
    let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    return (
        <View style={styles.contenu}>
            <View style={styles.localisation}>
                <Text style={styles.date}>Jeudi 19 Mars</Text>
                <Text style={styles.ville}>THIAIS</Text>
                <Text style={styles.heure}>{fullDate}</Text>
            </View>
            <View style={styles.temps}>
                <Text style={styles.description}>Ensoleillé</Text>
                <Image style={styles.image}
                    source={soleil}
                />
                <Text style={styles.temperature}>19°C</Text>
            </View>

            <Previsions />
        </View>
    );
}