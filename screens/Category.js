import React from 'react';
import {Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import Header from '../components/Header';
import {useFetchGet} from '../components/UseFetch';
import {categoryCss, homeCss} from '../assets/css/appStyle';

const CategoryScreen = () => {
    const [items, loading ] = useFetchGet("https://api-electronic-repair.herokuapp.com/api/category")
    console.log(items.data)

    if (loading){
        return(
            <View><Text>Chargement</Text></View>
        )
    }

    return (
        <View style={categoryCss.categoryView}>
            <Header/>

            <Text style={homeCss.title}>Catégorie d'appareils électroniques</Text>

            <ScrollView>
                <View style={{flexDirection:"row", flexWrap:'wrap', justifyContent:'space-around'}}>
                    {
                        items.data.map((item) => (
                            <TouchableHighlight activeOpacity={0.85} style={categoryCss.button} underlayColor="rgba(255,255,255,0.65)" key={item.id} onPress={() =>console.log("hello")}>
                                <View>
                                    <Image style={categoryCss.picture} source={{uri:item.image}} />

                                    <View style={categoryCss.viewText}
                                    >
                                        <Text style={categoryCss.textCategory}>
                                            {item.name}
                                        </Text>

                                        <Text style={categoryCss.textNumberAppliance}>
                                            {item.appliance.length} <Text>appareils</Text>
                                        </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
};

export default CategoryScreen;
