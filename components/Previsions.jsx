import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Image, View, SafeAreaView, ScrollView, FlatList } from 'react-native';

//Style de la page Prévisions

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
        height: 120,
        width: '97%',
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
        textAlign: 'left',
        fontSize: 19,
        marginTop: 20,
    },

    date: {
        fontWeight: 'bold',
        fontSize: 25,
    }, 

    image: {
        margin: 'auto',
        marginTop: -17,
        width: '100%',
        height: '100%',
    },

    description: {
        textAlign: 'center',
        margin: 'auto',
        marginTop: -12,
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
        textAlign: 'left',
        fontSize: 30,
        marginTop: 30,
        marginLeft: 20,
    },

    boutton: {
        padding: 0,
        color: 'white',
        fontSize: 30,
        marginLeft: 5,
    },
});

// const apiKey = '842c20593572a2bedc0d21ab65cfb6bb';
const apiKey = '093c63d1d6dd2f0f77c6f14d91a19042';
const ville = 'Thiais';

//Fonction Previsions où se trouveront les informations relative à la météo des 5 prochains jours

export default function Previsions({ navigation }) {

    const [city, setCity] = useState('');
    const [g, setMeteo] = useState('');

//Appel de l'API météo pour afficher la météo des 5 prochains jours

    useEffect(() => {

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${apiKey}&units=metric&lang=fr`)
            .then(response => response.json())
            .then(jsonData => {
                setCity(jsonData.city.name)
                setMeteo(jsonData);
            })
    })

//Contenus de la page Prévision

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
                    <FlatList
                        data={g.list}
                        renderItem={({ item }) => {
                            return (
                                <List item={item} />
                            )
                        }
                        }
                        keyExtractor={item => item.dt}
                    />
                </LinearGradient>

            </ScrollView>
        </SafeAreaView>
    );
}

// Composant List qui affichera la météo à un temps donné et qui se répétera le nombre de fois qu'il faudra
// On l'appel dans la fonction Previsions

const List = (props) => {

    const g = props.item;

    const [temp, setTemp] = useState('');
    const [date, setDate] = useState('');
    const [heure, setHeure] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        setDate(g.dt_txt.split(" ")[0]);
        setHeure(g.dt_txt.split(" ")[1]);
        setDesc(g.weather[0].description.charAt(0).toUpperCase() + g.weather[0].description.slice(1))
        setIcon(g.weather[0].icon)
        setTemp(g.main.temp.toFixed(1))
    });

//Affichage de la date sous la forme : "1 Avril"

    let jour = new Date(date);
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let mois = months[jour.getUTCMonth()];
    let jours = jour.getUTCDate();

//Contenus du composant List

      return (
        <View style={styles.prochainement}>
            <View style={styles.gauche}>
                <Image style={styles.image}
                    source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
                />

                <Text style={styles.description}>{desc}</Text>
            </View>
            <View style={styles.droite}>

                <Text style={styles.jour}><Text style={styles.date}>{jours} {mois}</Text> {"\n"}à {heure.substring(0, heure.length - 3)}</Text>
                <Text style={styles.degre}>{temp}°C</Text>
            </View>
        </View>
    )
}