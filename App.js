/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {View, Text} from 'react-native';

export default function App() {

    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Hello</Text>
        </View>
    )
}
