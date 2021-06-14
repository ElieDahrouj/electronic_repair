import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useFetchGetId} from '../components/UseFetch';
import {categoryIdCss, applianceIdCss, whiteSmoke, tutorialIdCss} from '../assets/css/appStyle';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                        <View key={item.id}>
                            <View style={applianceIdCss.viewAppliance}>
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
                                        <Text style={tutorialIdCss.favoryStyle}>Favoris <FontAwesome name="star" size={17} color="#FFD428" />: {item.nb_favorite}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={[tutorialIdCss.ph8, tutorialIdCss.mt15]}>
                                <View style={tutorialIdCss.mostInformation}>
                                    <Text style={tutorialIdCss.textMostInformation}>
                                        <Entypo name="gauge" size={15} color="#98a5af" /> Difficulté
                                    </Text>

                                    <Text>{item.difficulty}</Text>
                                </View>

                                <View style={tutorialIdCss.mostInformation}>
                                    <Text style={tutorialIdCss.textMostInformation}>
                                        <MaterialCommunityIcons name="clock-time-two-outline" size={15} color="#98a5af" /> Temps
                                    </Text>

                                    <Text>{item.necessary_time}</Text>
                                </View>

                                <View style={tutorialIdCss.mostInformation}>
                                    <Text style={tutorialIdCss.textMostInformation}>
                                        <Ionicons name="list" size={15} color="#98a5af" /> Nombre d'{item.tutorial_step.length > 1 ? "étapes": "étape"}
                                    </Text>

                                    <Text>{item.tutorial_step.length}</Text>
                                </View>

                                <View style={tutorialIdCss.mostInformation}>
                                    <Text style={tutorialIdCss.textMostInformation}>
                                        <MaterialCommunityIcons name="gauge" size={15} color="#98a5af" /> Appareil à réparer
                                    </Text>

                                    <Text>{item.appliance.name}</Text>
                                </View>


                                <Text style={tutorialIdCss.infoToUseTutorial}>
                                    <MaterialCommunityIcons name="information-outline" size={15} color="#0D717A" /> Le demontage se fait en partant du haut vers le bas et le montage inversement !
                                </Text>
                            </View>

                            <View>
                                {
                                    item.tutorial_step.map((step) => (
                                        <View key={step.id} style={[tutorialIdCss.my33,tutorialIdCss.ph8]}>
                                            <Text style={tutorialIdCss.stepCss}>Étape: {step.step_number}</Text>

                                            <View style={tutorialIdCss.tutorialPictureDescription}>
                                                {
                                                    step.tutorial_picture.map((tutorial_picture) => (
                                                        <Image key={tutorial_picture.id} style={tutorialIdCss.picture} source={{uri:tutorial_picture.path}} />
                                                    ))
                                                }

                                                <Text style={tutorialIdCss.descriptionSize}>
                                                    {step.description}
                                                </Text>
                                            </View>
                                        </View>

                                    ))
                                }
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};
export default TutorialIdScreen;
