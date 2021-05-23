import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';
import {homeCss} from '../assets/css/appStyle'

const HomeScreen = () => {
    return (
        <View style={homeCss.homeView}>
            <Header/>
            <View>
                <Text style={homeCss.title}>Tutoriels populaires</Text>
            </View>
        </View>
    );
};

export default HomeScreen;
