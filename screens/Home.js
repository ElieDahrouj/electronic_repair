import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../components/Header';
import {homeCss} from '../assets/css/appStyle'
import {useFetchGet} from '../components/UseFetch';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    const [items, loading ] = useFetchGet("https://api-electronic-repair.herokuapp.com/api/home")
    console.log(items.data)

    if (loading){
        return(
            <View><Text>helol</Text></View>
        )
    }

    return (
        <View style={homeCss.homeView}>
            <Header/>
            <View>
                <Text style={homeCss.title}>Tutoriels populaires</Text>
                <ScrollView vertical={true}>
                    {
                        items.data.map((item) => (
                            <View key = {item.id}>
                                <Text style={homeCss.h1}>{item.name}</Text>
                                <Text style={homeCss.author}> <Text style={homeCss.span}>Rédigé par :</Text> {item.author} chez {item.company}</Text>
                                <Text style={homeCss.author}> <Text style={homeCss.span}>Temps nécessaire :</Text> {item.necessary_time} </Text>
                                <View>
                                    <Text>{item.nb_favorite} <Ionicons name="star" size={15} color={"#FFD428"} /></Text>
                                    <Text>{item.nb_completed_repair} <Ionicons name="settings-sharp" size={15} color={"#7ED321"} /></Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
};

export default HomeScreen;
