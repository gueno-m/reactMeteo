import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Image, View } from 'react-native';

//Style de la page Home

const styles = StyleSheet.create({

    localisation: {
        width: 'auto',
        marginTop: 10,
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
        textTransform: 'uppercase',
    },

    heure: {
        textAlign: 'center',
        margin: 'auto',
        color: 'white',
        fontSize: 20,
    },

    temps: {
        width: '80%',
        height: 400,
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
    },

    tempsglob: {
        margin: 'auto',
        marginTop: 0,
        flex: .8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        width: '100%',
    },

    barre: {
        borderColor: '#FFFFFF',
        borderWidth: 2,
        marginTop: -20,
    },

    minText: {
        color: 'red',
        fontSize: 40,
    },

    maxText: {
        color: 'green',
        fontSize: 40,
    },

    max: {
        flex: 1,
        flexDirection: 'row',
        margin: 'auto',
        marginLeft: 130,
    },

    min: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        margin: 'auto',
        marginLeft: 0,
    },

    maxDegre: {
        margin: 'auto',
        color: '#023047',
        fontSize: 20,
        marginTop: 12.5,
    },
});

//Fonction Home où se trouveront les informations relative à la météo du jour

export default function Home({ navigation }) {

    // const apiKey = '842c20593572a2bedc0d21ab65cfb6bb';
    const apiKey = '093c63d1d6dd2f0f77c6f14d91a19042';
    const ville = 'Thiais';

    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState('');
    const [min, setTempMin] = useState('');
    const [max, setTempMax] = useState('');

//Appel de l'API météo pour afficher la météo du jour

    useEffect(() => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&lang=fr&units=metric`)
            .then(response => response.json())
            .then(jsonData => {
                setCity(jsonData.name)
                setDesc(jsonData.weather[0].description.charAt(0).toUpperCase() + jsonData.weather[0].description.slice(1))
                setIcon(jsonData.weather[0].icon)
                setTemp(jsonData.main.temp.toFixed(1))
                setTempMin(jsonData.main.temp_min.toFixed())
                setTempMax(jsonData.main.temp_max.toFixed())
            })
    })

//Affichage de la date du jour sous la forme: "Lundi 1 Avril"

    let date = new Date();
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let fullDate = `${week[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

    const [minute, SetMinute] = useState('');
    const [heure, SetHeure] = useState('');

//Fonction pour récupérer l'heure en direct afin de l'afficher sous la forme: "15:30"

    useEffect(() => {

        setInterval( function heure(){
            let h = new Date().getHours();
            h = (h < 10) ? `0${h}` : h;
            SetHeure(h);
        }, 600)
        setInterval( function minute(){
            let minute = new Date().getUTCMinutes();
            minute = (minute < 10) ? `0${minute}` : minute;
            SetMinute(minute);
        }, 100)

    })

//Contenus de la page Home

    return (

// Fonctionnalité ReactNative permettant de faire un fond dégradé

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
                <Text style={styles.heure}>{heure}:{minute}</Text>
            </View>
            <View style={styles.temps}>
                <Text style={styles.description}>{desc}</Text>
                <Image style={styles.image}
                    source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
                />

                <View style={styles.barre}></View>

                <View style={styles.tempsglob}>
                    <View style={styles.min}>
                        <Text style={styles.maxDegre}>{min}°C</Text>
                        <Text style={styles.minText}>&#8600;</Text>
                    </View>

                    <View style={styles.max}>
                        <Text style={styles.maxText}>&#8599;</Text>
                        <Text style={styles.maxDegre}>{max}°C</Text>
                    </View>
                </View>
                <Text style={styles.temperature}>{temp}°C</Text>
            </View>

            <Text style={styles.boutton} onPress={() => navigation.navigate('Prochains jours')}>&rarr;</Text>

        </LinearGradient>
    );
}