import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useFetchGetId} from '../components/UseFetch';
import {categoryIdCss,eshopCategoryIdCss} from '../assets/css/appStyle';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EshopCategoryId = ({ route, navigation }) => {
    const { eshopCategory_id } = route.params;
    const [items, loading ] = useFetchGetId("https://api-electronic-repair.herokuapp.com/api/eshop/",eshopCategory_id)

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
                <View style={categoryIdCss.pb15}>
                    {
                        items.data.map((item) => (
                            <View key={item.id} style={categoryIdCss.viewPicture}>
                                <Image style={categoryIdCss.picture} source={{uri:item.picture}} />
                                <View style={categoryIdCss.viewText}>
                                    <Text style={categoryIdCss.textCategory}>{item.name}</Text>
                                </View>
                                <View style={categoryIdCss.viewIcon}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FF8C00" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                    {
                        items.data[0].equipment.map((equipment) => (
                            <View style={[categoryIdCss.viewAppliance]} key={equipment.id}>
                                <View>
                                    <Image style={categoryIdCss.pictureAppliance} source={{uri:equipment.picture}} />
                                </View>
                                <View style={categoryIdCss.viewTextAppliance}>
                                    <Text style={categoryIdCss.textTitle}>{equipment.name}</Text>

                                    <View style={categoryIdCss.my}>
                                        <Text style={eshopCategoryIdCss.textPrice}>{equipment.price} €</Text>
                                    </View>

                                    <Text style={categoryIdCss.textDescription} numberOfLines={3}>{equipment.description}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    );
};
export default EshopCategoryId;
