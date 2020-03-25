import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Image, View } from 'react-native';
// import soleil from '../assets/soleil.gif';

const styles = StyleSheet.create({

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

    boutton: {
        padding: 0,
        color: 'white',
        fontSize: 40,
        // borderColor: '#FFFFFF',
        // borderWidth: 3,
    },
});

export default function Home({ navigation }) {

    const apiKey = '842c20593572a2bedc0d21ab65cfb6bb';
    const ville = 'Paris';

    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState('');

    useEffect(() => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
            .then(response => response.json())
            .then(jsonData => {
                setCity(jsonData.name)
                setDesc(jsonData.weather[0].description)
                setIcon(jsonData.weather[0].icon)
                setTemp(jsonData.main.temp.toFixed(1))
            })
    })

    let date = new Date();
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    return (
        <LinearGradient colors={
            ['#0093E9', '#80D0C7']
        }
            style={
                {
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }
            } >
                <View style={styles.localisation}>
                    <Text style={styles.date}>{fullDate}</Text>
                    <Text style={styles.ville}>{city}</Text>
                    <Text style={styles.heure}>15:30</Text>
                </View>
                <View style={styles.temps}>
                    <Text style={styles.description}>{desc}</Text>
                    <Image style={styles.image}
                        source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
                    />
                    <Text style={styles.temperature}>{temp}°C</Text>
                </View>

                <Text style={styles.boutton} onPress={() => navigation.navigate('Prochains jours')}>&rarr;</Text>

        </LinearGradient>
    );
}