import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView} from 'react-native';

const styles = StyleSheet.create({

    haut: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        margin: 'auto',
        marginTop: 10,
        zIndex: 2,
    },

    container: {
        flex: 1,
      },

    titre: {
        margin: 'auto',
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 2,
    },

    ville: {
        width: '95%',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },

    prochainement: {
        flex: 1,
        height: 100,
        width: '95%',
        flexDirection: 'row',
        marginBottom: 20,
    },

    gauche: {
        margin: 'auto',
        height: '100%',
        width: '40%',
        padding: 10,
        borderColor: '#FFFFFF',
        borderWidth: 2,
    },

    jour: {
        margin: 'auto',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    },

    image: {
        margin: 'auto',
        marginTop: -10,
        width: '100%',
        height: '100%',
    },

    description: {
        textAlign: 'center',
        margin: 'auto',
        marginTop: -5,
        color: 'white',
        fontSize: 15,
    },

    droite: {
        flex: 0,
        flexDirection: 'row',
        margin: 'auto',
        height: '100%',
        width: '60%',
        padding: 10,
        borderColor: '#FFFFFF',
        borderWidth: 2,
    },

    degre: {
        width: '80%',
        margin: 'auto',
        color: '#023047',
        textAlign: 'center',
        fontSize: 40,
        marginTop: 15,
    },

    boutton: {
        padding: 0,
        color: 'white',
        fontSize: 30,
        marginLeft: 5,
    },
});

const apiKey = '842c20593572a2bedc0d21ab65cfb6bb';
const ville = 'Thiais';

    export default function Previsions({ navigation }) {

    const [city, setCity] = useState('');
    useEffect(() => {

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${apiKey}&units=metric&lang=fr`)
            .then(response => response.json())
            .then(jsonData => {
                setCity(jsonData.city.name)
            })
    })

    return (

        <SafeAreaView style={styles.container}>
<ScrollView>
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
            <View style={styles.haut}>
            <Text style={styles.boutton} onPress={() => navigation.navigate('Accueil')}>&larr;</Text>

                <Text style={styles.titre}>Météo des prochains jours</Text>
            </View>

            <Text style={styles.ville}>{city}...</Text>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </LinearGradient>

        </ScrollView>
        </SafeAreaView>
    );
}

const List = () => {

    const [temp, setTemp] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${apiKey}&units=metric&lang=fr`)
            .then(response => response.json())
            .then(jsonData => {
                setTemp(jsonData.list[10].main.temp.toFixed())
                setDate(jsonData.list[10].dt_text)
                setDesc(jsonData.list[7].weather[0].description.charAt(0).toUpperCase() + jsonData.list[5].weather[0].description.slice(1))
                setIcon(jsonData.list[7].weather[0].icon)
            })
    })


    return (
        <View style={styles.prochainement}>
            <View style={styles.gauche}>
                <Image style={styles.image}
                    source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
                />

                <Text style={styles.description}>{desc}</Text>
            </View>
            <View style={styles.droite}>

            <Text style={styles.jour}>Demain {"\n"} à 00:00</Text>
            <Text style={styles.degre}>{temp}°C</Text>
            </View>
        </View>
    )
}