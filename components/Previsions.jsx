import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

const styles = StyleSheet.create({

    haut: {
        flex: .06,
        flexDirection: 'row',
        width: '100%',
        margin: 'auto',
        marginTop: 30,
        zIndex: 2,
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
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 60,
    },

    prochainement: {
        flex: .26,
        width: '95%',
        flexDirection: 'row',
        marginTop: 10,
    },

    gauche: {
        margin: 'auto',
        height: '100%',
        width: '30%',
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
        marginTop: -8,
    },

    image: {
        margin: 'auto',
        marginTop: -18,
        width: '100%',
        resizeMode: 'center',
        height: '100%',
    },

    description: {
        textAlign: 'center',
        margin: 'auto',
        marginTop: -15,
        color: 'white',
        fontSize: 15,
    },

    droite: {
        flex: 0,
        flexDirection: 'row',
        margin: 'auto',
        height: '100%',
        width: '70%',
        padding: 10,
        borderColor: '#FFFFFF',
        borderWidth: 2,
    },

    prochainesheures: {
        marginRight: 5,
    },

    heure: {
        margin: 'auto',
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 0,
    },

    imagesprochainesheures: {
        margin: 'auto',
        marginTop: -12,
        width: '100%',
        resizeMode: 'center',
        height: '100%',
    },

    degre: {
        margin: 'auto',
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        marginTop: -18,
    },

    boutton: {
        padding: 0,
        color: 'white',
        fontSize: 30,
        marginLeft: 5,
        // borderColor: '#FFFFFF',
        // borderWidth: 3,
    },
});

export default function Previsions({ navigation }) {
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
            <View style={styles.haut}>
            <Text style={styles.boutton} onPress={() => navigation.navigate('Accueil')}>&larr;</Text>

                <Text style={styles.titre}>Météo des prochains jours</Text>
            </View>

            <Text style={styles.ville}>THIAIS...</Text>
            <List />
            <List />
            <List />
        </LinearGradient>
    );
}

const List = () => {
    return (
        <View style={styles.prochainement}>

            <View style={styles.gauche}>
                <Text style={styles.jour}>Demain</Text>
                <Image style={styles.image}
                    source={require('../assets/soleil.png')}
                />

                <Text style={styles.description}>Ensoleillé</Text>
            </View>
            <View style={styles.droite}>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>00h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>03h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>06h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>09h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>12h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>15h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>18h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
                <View style={styles.prochainesheures}>
                    <Text style={styles.heure}>21h</Text>
                    <Image style={styles.imagesprochainesheures}
                        source={require('../assets/soleil.png')}
                    />
                    <Text style={styles.degre}>0°C</Text>
                </View>
            </View>
        </View>
    )
}