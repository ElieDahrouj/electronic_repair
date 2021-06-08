import React, {useState} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, Animated} from 'react-native';
import {useFetchGetId} from '../components/UseFetch';
import {categoryIdCss, eshopIdCss} from '../assets/css/appStyle';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EshopId = ({ route, navigation }) => {
    const { eshop_id } = route.params;
    const [items, loading ] = useFetchGetId("https://api-electronic-repair.herokuapp.com/api/equipment/",eshop_id)
    const [scrollY, setScrollY] = useState(new Animated.Value(0))
    console.log(items)

    if (loading){
        return(
            <View style={categoryIdCss.categoryIdView}>
                <LottieView source={require('../assets/animation/lf30_editor_9jqe1ajf.json')} autoPlay loop />
            </View>
        );
    }

    return (
        <View style={categoryIdCss.categoryIdView}>
            <ScrollView>
                {
                    items.data.map((item) => (
                        <View key={item.id} style={eshopIdCss.viewEshopId}>
                            <View style={eshopIdCss.titleArrow}>
                                <View style={eshopIdCss.arrow}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FF8C00" />
                                    </TouchableOpacity>
                                </View>

                                <View style={eshopIdCss.title}>
                                    <Text style={eshopIdCss.textTitle}>{item.name}</Text>
                                </View>
                            </View>

                            <Image style={eshopIdCss.picture} source={{uri:item.picture}} />

                            <View style={eshopIdCss.moreInfo}>
                                <View style={eshopIdCss.categoryEshopPrice}>
                                    <Text style={eshopIdCss.price}>Prix: {item.price} €</Text>
                                    <Text style={eshopIdCss.category_eshop}>{item.category_eshop.name}</Text>
                                </View>

                                <Text style={eshopIdCss.descriptionCss}>{item.description}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>

            <TouchableOpacity activeOpacity={0.6} style={eshopIdCss.btnAdd} onPress={() => console.log('Simple Button pressed')}>
                <Text style={eshopIdCss.txtBtn}>Ajouter au panier</Text>
            </TouchableOpacity>
        </View>
    );
};
export default EshopId;
