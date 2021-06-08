import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useFetchGetId} from '../components/UseFetch';
import {categoryIdCss} from '../assets/css/appStyle';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const CategoryIdScreen = ({ route, navigation }) => {
    const { category_id } = route.params;
    const [items, loading ] = useFetchGetId("https://api-electronic-repair.herokuapp.com/api/category/",category_id)

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
                        <View key={item.id}>
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
                    items.data[0].appliance.map((appliance) => (
                        <TouchableOpacity style={categoryIdCss.viewAppliance} key={appliance.id} onPress={() => {
                            navigation.navigate('Appliance_id', {
                                appliance_id: appliance.id,
                            })
                        }}>
                            <View>
                                <Image style={categoryIdCss.pictureAppliance} source={{uri:appliance.picture}} />
                            </View>

                            <View style={categoryIdCss.viewTextAppliance}>
                                <Text style={categoryIdCss.textTitle}>{appliance.name}</Text>

                                <View style={categoryIdCss.my10}>
                                    <Text>
                                        {
                                            appliance.reparability_index <= 1.5 && appliance.reparability_index != null ?
                                                <Text style={[categoryIdCss.danger]}>Réparabilité <FontAwesome name="wrench" size={15} color="#d71528" /> : {appliance.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            appliance.reparability_index > 1.5 && appliance.reparability_index <= 3 && appliance.reparability_index != null ?
                                                <Text style={[categoryIdCss.beCareful]}>Réparabilité <FontAwesome name="wrench" size={15} color="#ed7425" /> : {appliance.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            appliance.reparability_index > 3 && appliance.reparability_index <= 5.5 && appliance.reparability_index != null ?
                                                <Text style={[categoryIdCss.warning]}>Réparabilité <FontAwesome name="wrench" size={15} color="#fcc816" /> : {appliance.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            appliance.reparability_index > 5.5 && appliance.reparability_index <= 7 && appliance.reparability_index != null ?
                                                <Text style={[categoryIdCss.good]}>Réparabilité <FontAwesome name="wrench" size={15} color="#9dc318" /> : {appliance.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            appliance.reparability_index > 7 && appliance.reparability_index <= 10 && appliance.reparability_index != null ?
                                                <Text style={[categoryIdCss.veryGood]}>Réparabilité <FontAwesome name="wrench" size={15} color="#139441" /> : {appliance.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                    </Text>
                                </View>

                                <Text style={categoryIdCss.textDescription} numberOfLines={3}>{appliance.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    );
};
export default CategoryIdScreen;
