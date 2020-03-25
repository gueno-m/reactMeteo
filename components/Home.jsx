import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import soleil from '../assets/soleil.gif';

const styles = StyleSheet.create({

    contenu: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'salmon',
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
        marginTop: 2,
        width: '100%',
        height: 250,
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

    // boutton: {
    //     margin: 'auto',
    //     color: 'black',
    //     fontSize: 100,
    // },
});

export default function Home({ navigation }) {

    let date = new Date();
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    return (
        <View style={styles.contenu}>
            <View style={styles.localisation}>
                <Text style={styles.date}>{fullDate}</Text>
                <Text style={styles.ville}>THIAIS</Text>
                <Text style={styles.heure}>15:30</Text>
            </View>
            <View style={styles.temps}>
                <Text style={styles.description}>Ensoleillé</Text>
                <Image style={styles.image}
                    source={soleil}
                />
                <Text style={styles.temperature}>19°C</Text>
            </View>

            <Button
               title="&rarr;"
               onPress={() => navigation.navigate('Prochains jours')} style={styles.boutton}
            />
        </View>
    );
}