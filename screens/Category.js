import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../components/Header';
import {useFetchGet} from '../components/UseFetch';

const CategoryScreen = () => {
    const [items, loading ] = useFetchGet("https://api-electronic-repair.herokuapp.com/api/home")
    console.log(items.data)

    if (loading){
        return(
            <View><Text>helol</Text></View>
        )
    }

    return (
        <View>
            <Header/>
            <ScrollView>
               <Text>GG</Text>
            </ScrollView>
        </View>
    );
};

export default CategoryScreen;
