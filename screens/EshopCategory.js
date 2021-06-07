import React from 'react';
import {Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import Header from '../components/Header';
import {useFetchGet} from '../components/UseFetch';
import {categoryCss, homeCss} from '../assets/css/appStyle';
import LottieView from 'lottie-react-native';

const EshopCategoryScreen = ({ navigation }) => {
    const [items, loading ] = useFetchGet("https://api-electronic-repair.herokuapp.com/api/eshop")
    console.log(items.data)

    if (loading){
        return(
            <View style={{flex:1}}>
                <Header/>
                <Text style={homeCss.title}>Boutique en ligne</Text>

                <LottieView source={require('../assets/animation/lf30_editor_9jqe1ajf.json')} autoPlay loop />
            </View>
        );
    }

    return (
        <View style={categoryCss.categoryView}>
            <Header/>

            <Text style={homeCss.title}>Boutique en ligne</Text>

            <ScrollView>
                <View style={categoryCss.scrollView}>
                    {
                        items.data.map((item) => (
                            <TouchableHighlight activeOpacity={0.85} style={categoryCss.button} underlayColor="rgba(255,255,255,0.65)" key={item.id} onPress={() => {
                                navigation.navigate('Eshop_category_id', {
                                    eshopCategory_id: item.id,
                                })
                            }}>
                                <View>
                                    <Image style={categoryCss.picture} source={{uri:item.picture}} />

                                    <View style={categoryCss.viewText}>
                                        <Text style={categoryCss.textCategory}>
                                            {item.name}
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

export default EshopCategoryScreen;
