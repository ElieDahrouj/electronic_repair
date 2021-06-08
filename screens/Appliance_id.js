import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useFetchGetId} from '../components/UseFetch';
import {categoryIdCss, applianceIdCss} from '../assets/css/appStyle';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const ApplianceIdScreen = ({ route, navigation }) => {
    const { appliance_id } = route.params;
    const [items, loading ] = useFetchGetId("https://api-electronic-repair.herokuapp.com/api/appliance/",appliance_id)

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
                        <View key={item.id} style={applianceIdCss.viewAppliance}>
                            <Image style={categoryIdCss.picture} source={{uri:item.picture}} />

                            <View style={applianceIdCss.infoView}>
                                <View style={categoryIdCss.viewIcon}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FF8C00" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={applianceIdCss.titleDescriptionView}>
                                <Text style={applianceIdCss.title}>{item.name}</Text>

                                <Text style={applianceIdCss.descriptionAppliance}>{item.description}</Text>
                            </View>

                            <View style={applianceIdCss.secondInfoView}>
                                <View style={[applianceIdCss.viewDoc,applianceIdCss.br]}>
                                    <Text>
                                        {
                                            item.reparability_index <= 1.5 && item.reparability_index != null ?
                                                <Text style={[categoryIdCss.danger,applianceIdCss.fs17]}>Réparabilité <FontAwesome name="wrench" size={15} color="#d71528" /> : {item.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            item.reparability_index > 1.5 && item.reparability_index <= 3 && item.reparability_index != null ?
                                                <Text style={[categoryIdCss.beCareful,applianceIdCss.fs17]}>Réparabilité <FontAwesome name="wrench" size={15} color="#ed7425" /> : {item.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            item.reparability_index > 3 && item.reparability_index <= 5.5 && item.reparability_index != null ?
                                                <Text style={[categoryIdCss.warning,applianceIdCss.fs17]}>Réparabilité <FontAwesome name="wrench" size={15} color="#fcc816" /> : {item.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            item.reparability_index > 5.5 && item.reparability_index <= 7 && item.reparability_index != null ?
                                                <Text style={[categoryIdCss.good,applianceIdCss.fs17]}>Réparabilité <FontAwesome name="wrench" size={15} color="#9dc318" /> : {item.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                        {
                                            item.reparability_index > 7 && item.reparability_index <= 10 && item.reparability_index != null ?
                                                <Text style={[categoryIdCss.veryGood,applianceIdCss.fs17]}>Réparabilité <FontAwesome name="wrench" size={15} color="#139441" /> : {item.reparability_index} / 10</Text>
                                                :
                                                ""
                                        }
                                    </Text>
                                </View>


                                <View style={applianceIdCss.viewDoc}>
                                    <Entypo name="documents" size={17} color="#ffffff" />
                                    <Text style={[applianceIdCss.fs17, applianceIdCss.ml3, applianceIdCss.colorDoc]}>{item.replacement_tutorial.length}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                }

                {
                    items.data[0].replacement_tutorial.map((appliance) => (
                        <TouchableOpacity style={categoryIdCss.viewAppliance} key={appliance.id}>
                            <View>
                                <Image style={categoryIdCss.pictureAppliance} source={{uri:appliance.image}} />
                            </View>

                            <View style={categoryIdCss.viewTextAppliance}>
                                <Text style={categoryIdCss.textTitle}>{appliance.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
        </View>
    );
};
export default ApplianceIdScreen;
