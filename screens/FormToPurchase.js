import React from 'react';
import {Text, View, TouchableOpacity, TextInput, ScrollView, Pressable} from 'react-native';
import {eshopIdCss, formToPurchaseCss} from '../assets/css/appStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CreditCardInput } from "react-native-credit-card-input-view";

const FormToPurchaseScreen = ({ navigation }) => {
    const [formData, setFormData] = React.useState({
        name:'Douglas',
        nickname:'Mickael',
        dateOfBirth:'12/09/2000',
        phone:'0655448899',
        email:'mikey@hotmail.com',
        address:'55 rue de thionville',
        postalCode:'75015',
        city:'Paris',
        creditCart:''
    })


    let _onChange = data => {
        setFormData(state => ({...state,creditCart: data}))
    }
   // console.log("test "+JSON.stringify(formData.creditCart.valid))
    return (
        <View style={formToPurchaseCss.purchaseView}>
            <ScrollView style={formToPurchaseCss.mb25}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="#FF8C00" />
                </TouchableOpacity>

                <Text style={formToPurchaseCss.title}>Informations à renseigner</Text>

                    <View style={formToPurchaseCss.viewInput}>
                        <TextInput
                            style={formToPurchaseCss.txtInput}
                            value={formData.name}
                            onChangeText={text => setFormData(state => ({...state,name: text}))}
                            placeholder="Nom"
                            keyboardType="default"
                        />

                        <TextInput
                            style={formToPurchaseCss.txtInput}
                            value={formData.nickname}
                            onChangeText={text => setFormData(state => ({...state,nickname: text}))}
                            placeholder="Prénom"
                            keyboardType="default"
                        />
                    </View>

                    <View style={formToPurchaseCss.viewInput}>
                        <TextInput
                            style={formToPurchaseCss.txtInput}
                            value={formData.dateOfBirth}
                            onChangeText={text => setFormData(state => ({...state,dateOfBirth: text}))}
                            placeholder="Date de naissance"
                            keyboardType="default"
                        />

                        <TextInput
                            style={formToPurchaseCss.txtInput}
                            value={formData.phone}
                            onChangeText={text => setFormData(state => ({...state,phone: text}))}
                            placeholder="Numéro de téléphone"
                            keyboardType="phone-pad"
                        />
                    </View>

                    <TextInput
                        style={formToPurchaseCss.txtAddressEmail}
                        value={formData.email}
                        onChangeText={text => setFormData(state => ({...state,email: text}))}
                        placeholder="Email"
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={formToPurchaseCss.txtAddressEmail}
                        value={formData.address}
                        onChangeText={text => setFormData(state => ({...state,address: text}))}
                        placeholder="Adresse"
                        keyboardType="default"
                    />

                <View style={formToPurchaseCss.viewInput}>
                    <TextInput
                        style={formToPurchaseCss.txtInput}
                        value={formData.postalCode}
                        onChangeText={text => setFormData(state => ({...state,postalCode: text}))}
                        placeholder="Code postal"
                        keyboardType="numeric"
                        maxLength={5}
                    />

                    <TextInput
                        style={formToPurchaseCss.txtInput}
                        value={formData.city}
                        onChangeText={text => setFormData(state => ({...state,city: text}))}
                        placeholder="Ville"
                        keyboardType="default"
                    />
                </View>

                    <Text style={formToPurchaseCss.title}>Mode de paiement</Text>

                    <View style={formToPurchaseCss.cb}>
                        <CreditCardInput
                            useVertical={true}
                            inputStyle={formToPurchaseCss.creditCard}
                            inputContainerStyle={{borderBottomWidth: 0,borderBottomColor:"#ffffff"}}
                            onChange={_onChange}
                        />
                    </View>
            </ScrollView>

            {
                formData.creditCart.valid === false ?
                    <Pressable activeOpacity={0.8} style={[formToPurchaseCss.btnNotValid]} disabled={true}>
                        <Text style={eshopIdCss.txtBtn}>Validez les informations</Text>
                    </Pressable>
                    :
                    <TouchableOpacity activeOpacity={0.8} style={[formToPurchaseCss.btnValid]} onPress={() => {
                        navigation.navigate('RecapOrder', { information: formData,})
                    }}>
                        <Text style={eshopIdCss.txtBtn}>Validez les informations</Text>
                    </TouchableOpacity>
            }
        </View>
    )
};

export default FormToPurchaseScreen;
