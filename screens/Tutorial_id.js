import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useFetchGetId} from '../components/UseFetch';
import {categoryIdCss, applianceIdCss, whiteSmoke, tutorialIdCss} from '../assets/css/appStyle';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const TutorialIdScreen = ({ route, navigation }) => {
    const { tutorial_id } = route.params;
    const [items, loading ] = useFetchGetId("https://api-electronic-repair.herokuapp.com/api/replacementTutorial/",tutorial_id)

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
                            <Image style={categoryIdCss.picture} source={{uri:item.image}} />

                            <View style={applianceIdCss.infoView}>
                                <View style={categoryIdCss.viewIcon}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FF8C00" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={applianceIdCss.titleDescriptionView}>
                                <Text style={applianceIdCss.title}>{item.name}</Text>
                            </View>

                            <View style={applianceIdCss.secondInfoView}>
                                <View style={[applianceIdCss.br, tutorialIdCss.informationAboutTutorial]}>
                                    <Text style={[{color:whiteSmoke}]}>
                                        Réparations terminées: { item.nb_completed_repair }
                                    </Text>

                                    <Ionicons style={tutorialIdCss.ml3} name="settings-sharp" size={18} color={"#7ED321"} />
                                </View>


                                <View style={tutorialIdCss.informationAboutTutorial}>
                                    <Entypo name="documents" size={17} color="#ffffff" />
                                    <Text style={[applianceIdCss.fs17, applianceIdCss.ml3, applianceIdCss.colorDoc]}>{item.tutorial_step.length} {item.tutorial_step.length > 1 ? "étapes": "étape"}</Text>
                                </View>
                            </View>
                        </View>
                    ))
                }

                {/*{*/}
                {/*    items.data[0].replacement_tutorial.map((appliance) => (*/}
                {/*        <Text>{appliance.}</Text>*/}
                {/*    ))*/}
                {/*}*/}

            </ScrollView>
        </View>
    );
};
export default TutorialIdScreen;
