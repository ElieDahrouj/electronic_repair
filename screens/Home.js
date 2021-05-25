import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import Header from '../components/Header';
import {homeCss, blackColor, whiteSmoke} from '../assets/css/appStyle'
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
                <ScrollView style={homeCss.scrollViewCss}>
                    {
                        items.data.map((item) => (
                            <View key = {item.id} style={[homeCss.viewEachTutorial, item.id %2 ? {backgroundColor:blackColor} : {backgroundColor: whiteSmoke}]}>
                                <View>
                                    <Image style={{width:200, height:200}} source={{uri:"https://api-electronic-repair.herokuapp.com/"+item.image}} />
                                </View>

                                <View>
                                    <Text style={homeCss.h1}>{item.name}</Text>
                                    <Text style={homeCss.author}> <Text style={homeCss.span}>Rédigé par :</Text> {item.author} chez {item.company}</Text>
                                    <Text style={homeCss.author}> <Text style={homeCss.span}>Temps nécessaire :</Text> {item.necessary_time} </Text>
                                    <View>
                                        <Text>
                                            <Text style={item.id %2 ? {color:whiteSmoke} : {color: blackColor}}>
                                                { item.nb_favorite }
                                            </Text>

                                            <Ionicons name="star" size={18} color={"#FFD428"} />
                                        </Text>

                                        <Text>
                                            <Text style={item.id %2 ? {color:whiteSmoke} : {color: blackColor}}>
                                                { item.nb_completed_repair }
                                            </Text>

                                            <Ionicons name="settings-sharp" size={18} color={"#7ED321"} />
                                        </Text>
                                    </View>
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
