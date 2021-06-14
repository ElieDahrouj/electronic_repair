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
                                        <Entypo name="documents" size={17} color="#ffffff" />

                                        <Text style={[ applianceIdCss.ml3, applianceIdCss.colorDoc]}>{item.tutorial_step.length} {item.tutorial_step.length > 1 ? "étapes": "étape"}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={tutorialIdCss.ph8}>
                                <View style={tutorialIdCss.firstInformation}>
                                    <View>
                                        <Text>
                                            {
                                                item.appliance.reparability_index <= 1.5 && item.appliance.reparability_index != null ?
                                                    <Text style={[categoryIdCss.danger]}>Réparabilité <FontAwesome name="wrench" size={15} color="#d71528" /> : {item.appliance.reparability_index} / 10</Text>
                                                    :
                                                    ""
                                            }
                                            {
                                                item.appliance.reparability_index > 1.5 && item.appliance.reparability_index <= 3 && item.appliance.reparability_index != null ?
                                                    <Text style={[categoryIdCss.beCareful]}>Réparabilité <FontAwesome name="wrench" size={15} color="#ed7425" /> : {item.appliance.reparability_index} / 10</Text>
                                                    :
                                                    ""
                                            }
                                            {
                                                item.appliance.reparability_index > 3 && item.appliance.reparability_index <= 5.5 && item.appliance.reparability_index != null ?
                                                    <Text style={[categoryIdCss.warning]}>Réparabilité <FontAwesome name="wrench" size={15} color="#fcc816" /> : {item.appliance.reparability_index} / 10</Text>
                                                    :
                                                    ""
                                            }
                                            {
                                                item.appliance.reparability_index > 5.5 && item.appliance.reparability_index <= 7 && item.appliance.reparability_index != null ?
                                                    <Text style={[categoryIdCss.good]}>Réparabilité <FontAwesome name="wrench" size={15} color="#9dc318" /> : {item.appliance.reparability_index} / 10</Text>
                                                    :
                                                    ""
                                            }
                                            {
                                                item.appliance.reparability_index > 7 && item.appliance.reparability_index <= 10 && item.appliance.reparability_index != null ?
                                                    <Text style={[categoryIdCss.veryGood]}>Réparabilité <FontAwesome name="wrench" size={15} color="#139441" /> : {item.appliance.reparability_index} / 10</Text>
                                                    :
                                                    ""
                                            }
                                        </Text>
                                    </View>

                                    <View>
                                        <Text>Favoris <FontAwesome name="star" size={15} color="#FFD428" />: {item.nb_favorite}</Text>
                                    </View>
                                </View>

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
                                        <Ionicons name="list" size={15} color="#98a5af" /> Nombre d'étapes
                                    </Text>

                                    <Text>{item.tutorial_step.length}</Text>
                                </View>

                                <View style={tutorialIdCss.mostInformation}>
                                    <Text style={tutorialIdCss.textMostInformation}>
                                        <MaterialCommunityIcons name="gauge" size={15} color="#98a5af" /> Appareil à réparer
                                    </Text>

                                    <Text>{item.appliance.name}</Text>
                                </View>
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
